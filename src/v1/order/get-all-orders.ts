import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getAllOrders(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/order/all',
    {
      schema: {
        summary: 'Get all orders',
        tags: ['orders'],
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
                corporationName: z.string(),
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
      const orders = await prisma.order.findMany({
        select: {
          id: true,
          paymentMethod: true,
          statusOrder: true,
          paymentStatus: true,
          amount: true,
          corporationId: true,
          corporation: {
            select: {
              name: true
            }
          },
          quantity: true,
          urlQrCode: true,
          urlComprovant: true,
          products: {
            select: {
              name: true
            }
          }
        }
      })

      if (!orders) {
        return reply.status(404).send({ message: 'Orders not found' })
      }

      return {
        orders: orders.map(order => ({
          orderId: order.id,
          paymentMethod: order.paymentMethod,
          statusOrder: order.statusOrder,
          paymentStatus: order.paymentStatus,
          amount: order.amount,
          corporationId: order.corporationId,
          corporationName: order.corporation.name,
          quantity: order.quantity,
          urlQrCode: order.urlQrCode || '',
          urlComprovant: order.urlComprovant || '',
          product: order.products.map(product => ({ name: product.name }))
        }))
      }
    }
  )
}
