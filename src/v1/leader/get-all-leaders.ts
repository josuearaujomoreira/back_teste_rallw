import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

export async function getAllLeaders(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/api/v1/leader/all',
    {
      schema: {
        summary: 'Get all leaders',
        tags: ['leaders'],
        response: {
          200: z.object({
            leaders: z.array(
              z.object({
                id: z.number(),
                name: z.string(),
                email: z.string(),
                accessStatus: z.string(),
                corporationName: z.string(),
                vacancies: z.number(),
                attendees: z.number()
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
      const leaders = await prisma.leader.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          accessStatus: true,
          corporation: {
            select: {
              name: true,
              vacancies: true,
              attendee: {
                select: {
                  id: true
                }
              }
            }
          }
        }
      })

      if (leaders === null) {
        return reply.status(404).send({ message: 'leader not found' })
      }

      return reply.send({
        leaders: leaders.map(leader => ({
          id: leader.id,
          name: leader.name,
          email: leader.email,
          accessStatus: leader.accessStatus ? 'Permitido' : 'Negado',
          corporationName: leader.corporation
            ? leader.corporation.name
            : 'Sem corporação',
          vacancies: leader.corporation ? leader.corporation.vacancies : 0,
          attendees: leader.corporation ? leader.corporation.attendee.length : 0
        }))
      })
    }
  )
}
