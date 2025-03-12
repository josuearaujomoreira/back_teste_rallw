import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/events/:eventId',
    {
      schema: {
        summary: 'Get an event',
        tags: ['events'],
        params: z.object({
          eventId: z.string().uuid()
        }),
        querystring: z.object({
          status: z.string().nullable()
        }),
        response: {
          200: z.object({
            event: z.object({
              id: z.string().uuid(),
              title: z.string(),
              slug: z.string(),
              details: z.string().nullable(),
              maximumAttendees: z.number().int().nullable(),
              attendeesAmount: z.number().int()
            })
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { eventId } = request.params
      const { status } = request.query
      const event = await prisma.event.findUnique({
        select: {
          id: true,
          title: true,
          slug: true,
          details: true,
          maximumAttendees: true,
          status: true,
          _count: {
            select: {
              attendees: true
            }
          }
        },
        where:
          status === 'true' ? { id: eventId, status: true } : { id: eventId }
      })

      if (event === null) {
        return reply.status(404).send({ message: 'Event not found' })
      }

      if (event.status === false) {
        return reply.status(404).send({ message: 'Event unavailable' })
      }

      return reply.send({
        event: {
          id: event.id,
          title: event.title,
          slug: event.slug,
          details: event.details,
          maximumAttendees: event.maximumAttendees,
          attendeesAmount: event._count.attendees
        }
      })
    }
  )
}
