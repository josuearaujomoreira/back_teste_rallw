import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function EditAttendeeForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/api/v1/events/attendee/:attendeeId/edit',
    {
      schema: {
        summary: 'Edit an attendee for an event',
        tags: ['attendees'],
        params: z.object({
          attendeeId: z.coerce.number().int()
        }),
        body: z.object({
          name: z.string().min(4).nullish(),
          age: z.number().int().positive().nullish(),
          corporationId: z.number().nullish()
        }),
        response: {
          201: z.object({
            message: z.string().default('Attendee updated successfully')
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { attendeeId } = request.params
      const { name, age, corporationId } = request.body

      const attendeeResponse = await prisma.attendee.findUnique({
        where: {
          id: attendeeId
        }
      })

      if (attendeeResponse === null) {
        return reply.status(404).send({ message: 'Attendee not found' })
      }

      const nameFormatted =
        name == null
          ? attendeeResponse?.name
          : name
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/\b\w/g, c => c.toUpperCase())

      await prisma.attendee.update({
        where: {
          id: attendeeId
        },
        data: {
          name: nameFormatted,
          age: age === null || age === undefined ? attendeeResponse?.age : age,
          corporationId:
            corporationId === null || corporationId === undefined
              ? attendeeResponse.corporationId
              : corporationId
        }
      })

      return reply.status(201).send()
    }
  )
}
