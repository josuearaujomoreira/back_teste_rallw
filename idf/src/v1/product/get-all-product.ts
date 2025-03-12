import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getAllProducts(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/product/all',
    {
      schema: {
        summary: 'Get all product',
        tags: ['product'],
        response: {
          200: z.object({
            products: z.array(
              z.object({
                productId: z.number(),
                name: z.string(),
                description: z.string(),
                price: z.number(),
                quantity: z.number()
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
      const products = await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          quantity: true
        }
      })

      if (products === null) {
        return reply.status(404).send({ message: 'product not found' })
      }

      return reply.send({
        products: products.map(product => ({
          productId: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity
        }))
      })
    }
  )
}
