import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function deleteEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/api/v1/events/:eventId',
    {
      schema: {
        summary: 'Delete an event',
        tags: ['events'],
        params: z.object({
          eventId: z.string().uuid()
        }),
        response: {
          201: z.object({
            message: z.string().default('Event deleted successfully')
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { eventId } = request.params

      const eventResponse = await prisma.event.findUnique({
        where: {
          id: eventId
        }
      })

      if (eventResponse === null) {
        return reply.status(409).send({ message: 'Event not found' })
      }

      await prisma.event.delete({
        where: {
          id: eventId
        }
      })

      return reply.status(201).send()
    }
  )
}
