import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function createCorporation(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/corporation/:leaderId/event/:eventId',
    {
      schema: {
        summary: 'Create an corporation',
        tags: ['corporation'],
        body: z.object({
          name: z.string().min(3).max(255)
        }),
        params: z.object({
          leaderId: z.coerce.number(),
          eventId: z.string().uuid()
        }),
        response: {
          201: z.object({
            corporationId: z.number()
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
      const { name } = request.body
      const { leaderId, eventId } = request.params

      const leader = await prisma.leader.findUnique({
        where: {
          id: leaderId
        }
      })

      if (!leader) {
        return reply.status(404).send({ message: 'Leader not found' })
      }

      const event = await prisma.event.findUnique({
        where: {
          id: eventId
        }
      })

      if (!event) {
        return reply.status(404).send({ message: 'Event not found' })
      }

      const corporation = await prisma.corporation.create({
        data: {
          name,
          leaderId: leaderId,
          eventId: eventId
        }
      })

      if (!corporation) {
        return reply.status(409).send({ message: 'Corporation not created' })
      }

      return reply.status(201).send({ corporationId: corporation.id })
    }
  )
}
