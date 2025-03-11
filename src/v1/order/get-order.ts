import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getOrder(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/order/:corporationId',
    {
      schema: {
        summary: 'Get orders by corporationId',
        tags: ['order'],
        params: z.object({
          corporationId: z.coerce.number().int().positive()
        }),
        response: {
          200: z.object({
            orders: z.array(
              z.object({
                orderId: z.number(),
                paymentMethod: z.string(),
                statusOrder: z.string(),
                paymentStatus: z.string(),
                amount: z.number(),
                corporationId: z.number(),
                quantity: z.number(),
                urlQrCode: z.string(),
                urlComprovant: z.string(),
                product: z.array(z.object({ name: z.string().nullish() }))
              })
            )
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { corporationId } = request.params

      const corporation = await prisma.corporation.findUnique({
        where: {
          id: corporationId
        }
      })

      if (!corporation) {
        return reply.status(404).send({ message: 'Corporation not found' })
      }

      const orders = await prisma.order.findMany({
        select: {
          id: true,
          paymentMethod: true,
          statusOrder: true,
          paymentStatus: true,
          amount: true,
          corporationId: true,
          quantity: true,
          urlQrCode: true,
          urlComprovant: true,
          products: {
            select: {
              name: true
            }
          }
        },
        where: {
          corporationId
        }
      })

      if (orders === null) {
        return reply.status(404).send({ message: 'Order not found' })
      }

      return reply.send({
        orders: orders.map(order => ({
          orderId: order.id,
          paymentMethod: order.paymentMethod,
          statusOrder: order.statusOrder,
          paymentStatus: order.paymentStatus,
          amount: order.amount,
          corporationId: order.corporationId,
          quantity: order.quantity,
          urlQrCode: order.urlQrCode || '',
          urlComprovant: order.urlComprovant || '',
          product: order.products.map(product => ({ name: product.name }))
        }))
      })
    }
  )
}
