import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

import nodemailer from 'nodemailer'
import { env } from '@/env'

export async function createLeader(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/leader',
    {
      schema: {
        summary: 'Create an leader',
        tags: ['leader'],
        body: z.object({
          name: z.string().min(3).max(255),
          email: z.string().email(),
          password: z.string().min(6).max(255)
        }),
        response: {
          201: z.object({
            leaderId: z.number()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email, password } = request.body

      const leaderFromEmail = await prisma.leader.findUnique({
        where: {
          email: email
        }
      })

      if (leaderFromEmail) {
        return reply.status(409).send({ message: 'Leader already exists' })
      }

      const leader = await prisma.leader.create({
        data: {
          name,
          email,
          password
        }
      })

      if (!leader) {
        return reply.status(409).send({ message: 'Leader not created' })
      }

      if (leader) {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service: 'gmail',
          secure: true,
          auth: {
            user: env.NODEMAILER_EMAIL_USER,
            pass: env.NODEMAILER_EMAIL_PASS
          }
        })

        await transporter
          .sendMail({
            from: env.NODEMAILER_EMAIL_USER,
            to: leader.email,
            subject: 'Solicitação de Credencial Realizada com Sucesso!',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="background-color: #293F92; padding: 20px; border-radius: 10px; text-align: center;">
                <h1 style="color: white;">Solicitação de Credencial Realizada com Sucesso!</h1>
              </div>
              <div style="padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-top: 20px; background-color: white;">
                <p style="color: #293F92;">Olá, <strong>${leader.name}</strong>!</p>
                <p>Estamos muito felizes em informar que sua solicitação de credencial foi realizada com sucesso. Segue abaixo suas credenciais</p>
                <p>Login: <strong>${leader.email}</strong></p>
                <p>Senha: <strong>${leader.password}</strong></p>
                <p style="margin-top: 20px;">Atenciosamente,</p>
                <p><strong>Equipe de Organização do Evento - IDF</strong></p>
                <div style="margin-top: 30px; text-align: center;">
                  <a href="https://idf-frontend-psi.vercel.app/" style="background-color: #293F92; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visite nosso site</a>
                </div>
              </div>
            </div>
          `
          })
          .then(info => {
            return reply.status(201).send({ leaderId: leader.id })
          })
          .catch(err => {
            return reply.status(201).send({ leaderId: leader.id })
          })
      }

      return reply.status(201).send({ leaderId: leader.id })
    }
  )
}
