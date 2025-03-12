import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function DeleteAttendeeForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/api/v1/events/attendee/:attendeeId/delete',
    {
      schema: {
        summary: 'Delete an attendee for an event',
        tags: ['attendees'],
        params: z.object({
          attendeeId: z.coerce.number().int()
        }),
        response: {
          201: z.object({
            message: z.string().default('Attendee deleted successfully')
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

        const attendeeResponse = await prisma.attendee.findUnique({
          where: {
            id: attendeeId
          }
        })

        if (attendeeResponse === null) {
          return reply.status(404).send({ message: 'Attendee not found' })
        }

        if (attendeeResponse) {
          await prisma.attendee.delete({
            where: {
              id: attendeeId
            }
          })

          const corporation = await prisma.corporation.findFirst({
            where: {
              id: attendeeResponse.corporationId
            }
          })

          if (corporation) {
            await prisma.corporation.update({
              where: {
                id: attendeeResponse.corporationId
              },
              data: {
                vacancies: corporation.vacancies + 1
              }
            })
          }
        }

        return reply.status(201).send()
      } catch (error) {
        return reply.status(401).send({ message: 'Unauthorized' })
      }
    }
  )
}
