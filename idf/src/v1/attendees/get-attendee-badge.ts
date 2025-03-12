import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function getAttendeeBadge(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/attendees/:attendeeId/badge',
    {
      schema: {
        summary: 'Get attendee badge',
        tags: ['attendees'],
        params: z.object({
          attendeeId: z.coerce.number().int()
        }),
        response: {
          200: z.object({
            badge: z.object({
              id: z.string(),
              name: z.string(),
              email: z.string().email(),
              corporation: z.string(),
              instrument: z.string().nullable(),
              eventTitle: z.string(),
              checkInURL: z.string().url(),
              type: z.string(),
              eventDetails: z.string().nullable(),
              eventId: z.string().uuid()
            })
          }),
          404: z.object({
            message: z.string()
          }),
          401: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      try {
        await request.jwtVerify()

        const { attendeeId } = request.params

        const attendee = await prisma.attendee.findUnique({
          select: {
            id: true,
            name: true,
            email: true,
            instrument: true,
            corporation: {
              select: {
                name: true
              }
            },
            type: true,
            event: {
              select: {
                title: true,
                details: true,
                id: true
              }
            }
          },
          where: {
            id: attendeeId
          }
        })

        if (attendee === null) {
          return reply.status(404).send({
            message: 'Attendee not found'
          })
        }

        const baseURL = `${request.protocol}://${request.hostname}`
        const checkInURL = new URL(
          `api/v1/attendees/${attendeeId}/check-in`,
          baseURL
        )

        return reply.send({
          badge: {
            id: attendee.id.toString(),
            name: attendee.name,
            email: attendee.email,
            corporation: attendee.corporation.name,
            instrument: attendee.instrument,
            eventTitle: attendee.event.title,
            checkInURL: checkInURL.toString(),
            type: attendee.type,
            eventDetails: attendee.event.details,
            eventId: attendee.event.id
          }
        })
      } catch (error) {
        return reply.status(401).send({ message: 'Unauthorized' })
      }
    }
  )
}
