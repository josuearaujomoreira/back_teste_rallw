import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

import nodemailer from 'nodemailer'
import { env } from '@/env'

export async function confirmPaymentOrder(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/order/confirm-payment/:orderId',
    {
      schema: {
        summary: 'confirm payment an order',
        tags: ['order'],
        params: z.object({
          orderId: z.coerce.number()
        }),
        response: {
          201: z.object({
            orderId: z.number(),
            statusOrder: z.string(),
            paymentStatus: z.string()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { orderId } = request.params

      const findOrder = await prisma.order.findUnique({
        where: {
          id: orderId
        }
      })

      if (!findOrder) {
        return reply.status(409).send({ message: 'Order not found' })
      }

      const vacanciesCorporation = await prisma.corporation.findUnique({
        select: {
          vacancies: true
        },
        where: {
          id: findOrder.corporationId
        }
      })

      if (!vacanciesCorporation) {
        return reply.status(409).send({ message: 'Corporation not found' })
      }

      const vacancies = vacanciesCorporation.vacancies + findOrder.quantity

      const order = await prisma.order.update({
        select: {
          id: true,
          paymentStatus: true,
          statusOrder: true,
          quantity: true,
          amount: true,
          products: {
            select: {
              name: true
            }
          }
        },
        data: {
          paymentStatus: 'payed',
          statusOrder: 'finished',
          paymentDate: new Date()
        },
        where: {
          id: orderId
        }
      })

      const corporation = await prisma.corporation.update({
        select: {
          name: true,
          leader: {
            select: {
              email: true
            }
          }
        },
        data: {
          vacancies
        },
        where: {
          id: findOrder.corporationId
        }
      })

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
          to: corporation.leader.email,
          subject: 'Confirmação de Pagamento do Pedido',
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="background-color: #293F92; padding: 20px; border-radius: 10px; text-align: center;">
                <h1 style="color: white;">Confirmação de Pagamento do Pedido</h1>
              </div>
              <div style="padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-top: 20px; background-color: white;">
                <p style="color: #293F92;">Olá, <strong>${corporation.name}</strong>!</p>
                <p>Estamos muito felizes em informar que seu pagamento foi confirmado. Seguem abaixo os detalhes do pedido:</p>
                <p><strong>Pedido:</strong> ${order.products[0].name}</p>
                <p><strong>Quantidade:</strong> ${order.quantity}</p>
                <p><strong>Valor Total:</strong> ${order.amount}</p>
                <p style="margin-top: 20px;">Atenciosamente,</p>
                <p><strong>Equipe de Organização do Evento - IDF</strong></p>
                <div style="margin-top: 30px; text-align: center;">
                  <a href="https://idf-frontend-psi.vercel.app/" style="background-color: #293F92; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visite nosso site</a>
                </div>
              </div>
            </div>
          `
        })
        .then(() => {
          return reply.status(201).send({
            orderId: order.id,
            paymentStatus: order.paymentStatus,
            statusOrder: order.statusOrder
          })
        })
        .catch(() => {
          return reply.status(201).send({
            orderId: order.id,
            paymentStatus: order.paymentStatus,
            statusOrder: order.statusOrder
          })
        })

      return reply.status(201).send({
        orderId: order.id,
        paymentStatus: order.paymentStatus,
        statusOrder: order.statusOrder
      })
    }
  )
}
