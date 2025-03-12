import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function cancelOrder(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/order/cancel/:orderId',
    {
      schema: {
        summary: 'cancel an order',
        tags: ['order'],
        params: z.object({
          orderId: z.coerce.number()
        }),
        response: {
          201: z.object({
            message: z.string()
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

      await prisma.order.update({
        data: {
          statusOrder: 'cancelled'
        },
        where: {
          id: orderId
        }
      })

      return reply.status(201).send({
        message: 'Order cancelled'
      })
    }
  )
}
