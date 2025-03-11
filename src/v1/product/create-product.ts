import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function createProduct(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/product',
    {
      schema: {
        summary: 'Create an product',
        tags: ['product'],
        body: z.object({
          name: z.string().min(3).max(255),
          description: z.string().min(3).max(255),
          price: z.number().min(0),
          quantity: z.number().min(0)
        }),
        response: {
          201: z.object({
            productId: z.number(),
            name: z.string(),
            description: z.string(),
            price: z.number(),
            quantity: z.number()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, description, price, quantity } = request.body

      const productFromName = await prisma.product.findUnique({
        where: {
          name: name
        }
      })

      if (productFromName) {
        return reply.status(409).send({ message: 'Product already exists' })
      }

      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
          quantity
        }
      })

      return reply.status(201).send({
        productId: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity
      })
    }
  )
}
