import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function checkIn(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/attendees/:attendeeId/check-in',
    {
      schema: {
        summary: 'Check in an attendee',
        tags: ['check-ins'],
        params: z.object({
          attendeeId: z.coerce.number().int()
        }),
        response: {
          201: z.null(),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { attendeeId } = request.params

      const attendeeCheckIn = await prisma.checkIn.findUnique({
        where: {
          attendeeId
        }
      })

      if (attendeeCheckIn !== null) {
        return reply
          .status(409)
          .send({ message: 'Attendee already checked in' })
      }

      await prisma.checkIn.create({
        data: {
          attendeeId
        }
      })

      return reply.status(201).send()
    }
  )
}
