import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

export async function getEventAttendeesByCorporation(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/events/:corporationId/attendees',
    {
      schema: {
        summary: 'Get event attendees by corporation',
        tags: ['events'],
        params: z.object({
          corporationId: z.coerce.number().int()
        }),
        response: {
          200: z.object({
            attendees: z.array(
              z.object({
                id: z.number(),
                name: z.string(),
                age: z.number(),
                email: z.string().email(),
                corporationName: z.string(),
                type: z.string(),
                checkedInAt: z.date().nullable(),
                instrument: z.string().nullable()
              })
            )
          }),
          401: z.object({
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

        const corporationExist = await prisma.corporation.findUnique({
          where: {
            id: corporationId
          }
        })

        if (corporationExist === null) {
          return reply.status(404).send({ message: 'Corporation not found' })
        }

        const eventExist = await prisma.event.findUnique({
          where: {
            id: corporationExist.eventId
          }
        })

        if (eventExist === null) {
          return reply.status(404).send({ message: 'Event not found' })
        }

        const eventId = eventExist.id

        const [attendees] = await Promise.all([
          prisma.attendee.findMany({
            select: {
              id: true,
              name: true,
              age: true,
              email: true,
              instrument: true,
              corporation: {
                select: {
                  name: true
                }
              },
              type: true,
              checkIn: {
                select: {
                  createdAt: true
                }
              }
            },
            where: {
              eventId,
              corporationId
            },
            orderBy: {
              createdAt: 'desc'
            }
          })
        ])

        return reply.send({
          attendees: attendees.map(attendee => {
            return {
              id: attendee.id,
              name: attendee.name,
              age: attendee.age,
              email: attendee.email,
              corporationName: attendee.corporation.name,
              type: attendee.type,
              checkedInAt: attendee.checkIn?.createdAt ?? null,
              instrument: attendee.instrument
            }
          })
        })
      } catch (error) {
        return reply.status(401).send({ message: 'Unauthorized' })
      }
    }
  )
}
