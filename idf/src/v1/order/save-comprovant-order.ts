import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function saveComprovantOrder(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/order/comprovant/:orderId',
    {
      schema: {
        summary: 'Save comprovant an order',
        tags: ['order'],
        body: z.object({
          urlComprovant: z.coerce.string()
        }),
        params: z.object({
          orderId: z.coerce.number()
        }),
        response: {
          201: z.object({
            urlComprovant: z.string()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { urlComprovant } = request.body
      const { orderId } = request.params

      const order = await prisma.order.findUnique({
        where: {
          id: orderId
        }
      })

      if (!order) {
        return reply.status(409).send({ message: 'Order not found' })
      }

      const comprovantUpdated = await prisma.order.update({
        data: {
          urlComprovant: urlComprovant
        },
        where: {
          id: orderId
        }
      })

      return reply.status(201).send({
        urlComprovant: comprovantUpdated.urlComprovant || urlComprovant
      })
    }
  )
}
