import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getAllEvents(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/events/all',
    {
      schema: {
        summary: 'Get all events',
        tags: ['events'],
        response: {
          200: z.object({
            events: z.array(
              z.object({
                id: z.string().uuid(),
                title: z.string()
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
      // Adicionar na api o campo de status do evento - ativo ou inativo
      const event = await prisma.event.findMany({
        select: {
          id: true,
          title: true
        },
        where: {
          status: true
        }
      })

      if (event === null) {
        return reply.status(404).send({ message: 'Event not found' })
      }

      return reply.send({
        events: event
      })
    }
  )
}
