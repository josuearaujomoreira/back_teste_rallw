import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function editCorporation(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/api/v1/corporation/:corporationId',
    {
      schema: {
        summary: 'Edit an corporation',
        tags: ['corporation'],
        body: z.object({
          name: z.string().optional(),
          vacancies: z.coerce.number().optional()
        }),
        params: z.object({
          corporationId: z.coerce.number()
        }),
        response: {
          200: z.object({
            id: z.number(),
            name: z.string(),
            vacancies: z.number()
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
      try {
        await request.jwtVerify()
        const { corporationId } = request.params
        const { name, vacancies } = request.body

        const corporation = await prisma.corporation.findUnique({
          where: {
            id: corporationId
          }
        })

        if (!corporation) {
          return reply.status(404).send({
            message: 'Corporation not found'
          })
        }

        const corporationPut = await prisma.corporation.update({
          where: {
            id: corporationId
          },
          data: {
            name,
            vacancies
          }
        })

        if (!corporationPut) {
          return reply.status(409).send({
            message: 'Error to update corporation'
          })
        }

        return reply.send({
          id: corporationPut.id,
          name: corporationPut.name,
          vacancies: corporationPut.vacancies
        })
      } catch (error) {
        return reply.status(401).send({ message: 'Unauthorized' })
      }
    }
  )
}
