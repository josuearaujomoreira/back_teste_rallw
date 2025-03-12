import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { generateSlug } from '@/utils/generate-slug'
import { prisma } from '@/lib/prisma'

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/events',
    {
      schema: {
        summary: 'Create an event',
        tags: ['events'],
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z
            .number()
            .int()
            .positive()
            .nullable()
            .default(null),
          local: z.string(),
          status: z.boolean().default(true)
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { details, maximumAttendees, title, local, status } = request.body

      const slug = generateSlug(title)

      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          slug
        }
      })

      if (eventWithSameSlug !== null) {
        return reply.status(409).send({ message: 'Event already exists' })
      }

      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
          local,
          status
        }
      })

      return reply.status(201).send({ eventId: event.id })
    }
  )
}
