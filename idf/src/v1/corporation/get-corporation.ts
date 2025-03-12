import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getCorporation(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/corporation/:corporationId',
    {
      schema: {
        summary: 'Get an corporation',
        tags: ['corporation'],
        params: z.object({
          corporationId: z.coerce.number().int().positive()
        }),
        response: {
          200: z.object({
            corporation: z.object({
              id: z.number(),
              name: z.string(),
              vacancies: z.number(),
              attendees: z.number()
            })
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { corporationId } = request.params

      const corporation = await prisma.corporation.findUnique({
        select: {
          id: true,
          name: true,
          vacancies: true,
          attendee: {
            select: {
              id: true
            }
          }
        },
        where: {
          id: corporationId
        }
      })

      if (!corporation) {
        reply.status(404).send({ message: 'Corporation not found' })
        return
      }

      let attendees = 0

      if (corporation.attendee) {
        attendees = corporation.attendee.length
      }

      reply.send({
        corporation: {
          id: corporation.id,
          name: corporation.name,
          vacancies: corporation.vacancies,
          attendees: attendees
        }
      })
    }
  )
}
