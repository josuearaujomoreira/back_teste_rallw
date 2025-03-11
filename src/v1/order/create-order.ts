import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function createOrder(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/order/:corporationId',
    {
      schema: {
        summary: 'Create an order',
        tags: ['order'],
        body: z.object({
          paymentMethod: z.string().min(3).max(255),
          quantity: z.number(),
          productId: z.number(),
          urlQrCode: z.string().nullish(),
          urlComprovant: z.string().nullish()
        }),
        params: z.object({
          corporationId: z.coerce.number()
        }),
        response: {
          201: z.object({
            orderId: z.number(),
            paymentMethod: z.string(),
            amount: z.number(),
            corporationId: z.number(),
            quantity: z.number(),
            urlQrCode: z.string().nullable(),
            urlComprovant: z.string().nullable()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { paymentMethod, productId, quantity, urlQrCode, urlComprovant } =
        request.body
      const { corporationId } = request.params

      const corporation = await prisma.corporation.findUnique({
        where: {
          id: corporationId
        }
      })

      if (!corporation) {
        return reply.status(409).send({ message: 'Corporation not found' })
      }

      const product = await prisma.product.findUnique({
        where: {
          id: productId
        }
      })

      if (!product) {
        return reply.status(409).send({ message: 'Product not found' })
      }

      if (product.quantity < quantity) {
        return reply.status(409).send({ message: 'Product out of stock' })
      }

      const amount = product.price * quantity

      const order = await prisma.order.create({
        data: {
          paymentMethod,
          amount,
          corporationId,
          quantity,
          urlQrCode,
          urlComprovant,
          products: {
            connect: {
              id: productId
            }
          }
        }
      })

      return reply.status(201).send({
        orderId: order.id,
        paymentMethod: order.paymentMethod,
        amount: order.amount,
        corporationId: order.corporationId,
        quantity: order.quantity,
        urlQrCode: order.urlQrCode,
        urlComprovant: order.urlComprovant
      })
    }
  )
}
