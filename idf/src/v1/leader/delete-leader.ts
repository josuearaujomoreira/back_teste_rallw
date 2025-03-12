import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function deleteLeader(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/api/v1/leader/:leaderId',
    {
      schema: {
        summary: 'Delete an leader',
        tags: ['leader'],
        params: z.object({
          leaderId: z.coerce.number()
        }),
        response: {
          201: z.object({
            message: z.string()
          }),
          409: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { leaderId } = request.params

      const leader = await prisma.leader.findUnique({
        where: {
          id: leaderId
        }
      })

      if (!leader) {
        return reply.status(409).send({ message: 'Leader not found' })
      }

      const corporation = await prisma.corporation.findUnique({
        where: {
          leaderId
        }
      })

      if (corporation) {
        await prisma.corporation.delete({
          where: {
            id: corporation.id
          }
        })

        const leaderDeleted = await prisma.leader.delete({
          where: {
            id: leaderId
          }
        })

        if (leaderDeleted) {
          return reply
            .status(201)
            .send({ message: 'Leader deleted successfully' })
        }
      }
    }
  )
}
