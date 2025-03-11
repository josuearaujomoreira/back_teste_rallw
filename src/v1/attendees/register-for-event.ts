import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import nodemailer from 'nodemailer'

import { z } from 'zod'

import { env } from '@/env'
import { TypeAttendee } from '@prisma/client'

export async function registerForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/events/:eventId/attendees',
    {
      schema: {
        summary: 'Register an attendee for an event',
        tags: ['attendees'],
        params: z.object({
          eventId: z.string().uuid()
        }),
        body: z.object({
          name: z.string().min(4),
          email: z.string().email().toLowerCase(),
          phone: z.string().min(11),
          age: z.number().int().positive(),
          type: z.string().default('ATTENDEE'),
          sex: z.string().min(1),
          shirtSize: z.string().min(1),
          eventQuantity: z.number().min(0).max(5), // fazendo com que o usuario coloque que participu de 0 a 5 eventos
          corporationId: z.number(),
          instrument: z.string().nullish().default('Sem instrumento')
        }),
        response: {
          201: z.object({
            attendeeId: z.number(),
            emailStatus: z.string()
          }),
          409: z.object({
            message: z.string()
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { eventId } = request.params
      const {
        name,
        email,
        age,
        type,
        corporationId,
        eventQuantity,
        phone,
        sex,
        shirtSize,
        instrument
      } = request.body

      const nameFormatted = name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\b\w/g, c => c.toUpperCase())

      const attendeeFromEmail = await prisma.attendee.findUnique({
        where: {
          eventId_email: {
            eventId,
            email
          }
        }
      })

      if (attendeeFromEmail !== null) {
        return reply.status(409).send({ message: 'Attendee already exists' })
      }

      const [event, amountOfAttendeesForEvent] = await Promise.all([
        prisma.event.findUnique({
          where: {
            id: eventId
          }
        }),
        prisma.attendee.count({
          where: {
            eventId
          }
        })
      ])

      if (
        event?.maximumAttendees &&
        amountOfAttendeesForEvent >= event?.maximumAttendees
      ) {
        return reply.status(409).send({ message: 'Event is full' })
      }

      if (event === null) {
        return reply.status(404).send({ message: 'Event not found' })
      }

      if (event?.status === false) {
        return reply.status(409).send({ message: 'Event is not active' })
      }

      let typeConverted: TypeAttendee = TypeAttendee.ATTENDEE

      if (type === 'ATTENDEE') {
        typeConverted = TypeAttendee.ATTENDEE
      }
      if (type === 'DRIVER') {
        typeConverted = TypeAttendee.DRIVER
      }

      if (type === 'ESCORT') {
        typeConverted = TypeAttendee.ESCORT
      }

      const corporation = await prisma.corporation.findUnique({
        where: {
          id: corporationId
        }
      })

      if (corporation === null) {
        return reply.status(404).send({ message: 'Corporation not found' })
      }

      if (corporation.vacancies <= 0) {
        return reply
          .status(409)
          .send({ message: 'Corporation vacancies is full' })
      }

      const attendee = await prisma.attendee.create({
        data: {
          name: nameFormatted,
          email,
          age,
          type: typeConverted,
          corporationId,
          eventQuantity,
          password: event.slug,
          phone,
          sex,
          shirtSize,
          eventId,
          instrument
        }
      })

      await prisma.corporation.update({
        where: {
          id: corporationId
        },
        data: {
          vacancies: corporation.vacancies - 1
        }
      })

      if (attendee) {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service: 'gmail',
          secure: true,
          auth: {
            user: env.NODEMAILER_EMAIL_USER,
            pass: env.NODEMAILER_EMAIL_PASS
          }
        })

        const response = await transporter
          .sendMail({
            from: env.NODEMAILER_EMAIL_USER,
            to: attendee.email,
            subject: 'Inscrição realizada com sucesso',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="background-color: #293F92; padding: 20px; border-radius: 10px; text-align: center;">
                <h1 style="color: white;">Inscrição Realizada com Sucesso!</h1>
              </div>
              <div style="padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-top: 20px; background-color: white;">
                <p style="color: #293F92;">Olá, <strong>${attendee.name}</strong>!</p>
                <p>Estamos muito felizes em informar que sua inscrição para o evento <strong>${event.title}</strong> foi realizada com sucesso!</p>
                <p>Segue abaixo as informações da sua inscrição:</p>
                <p><strong>Email:</strong> ${attendee.email}</p>
                <p><strong>senha:</strong> ${event.slug}</p>
                <p style="margin-top: 20px;">Atenciosamente,</p>
                <p><strong>Equipe de Organização do Evento - IDF</strong></p>
                <div style="margin-top: 30px; text-align: center;">
                  <a href="https://institutodesenhandofuturo.com.br/" style="background-color: #293F92; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visite nosso site</a>
                </div>
              </div>
            </div>
          `
          })
          .then(info => {
            return info
          })
          .catch(err => {
            return err
          })

        if (!response.messageId) {
          return reply
            .status(201)
            .send({ attendeeId: attendee.id, emailStatus: 'Não enviado' })
        }
      }

      return reply
        .status(201)
        .send({ attendeeId: attendee.id, emailStatus: 'Enviado' })
    }
  )
}
