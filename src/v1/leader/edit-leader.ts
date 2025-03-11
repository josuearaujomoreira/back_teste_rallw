import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function editLeader(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/api/v1/leader/:leaderId',
    {
      schema: {
        summary: 'Edit an leader',
        tags: ['leader'],
        body: z.object({
          name: z.string().nullish(),
          password: z.string().nullish(),
          corporationName: z.string().nullish(),
          accessStatus: z.string().nullish()
        }),
        params: z.object({
          leaderId: z.coerce.number()
        }),
        response: {
          200: z.object({
            name: z.string().nullish(),
            password: z.string().nullish(),
            corporationName: z.string().nullish(),
            accessStatus: z.boolean().nullish()
          }),
          409: z.object({
            message: z.string()
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { leaderId } = request.params
      const { name, password, corporationName, accessStatus } = request.body

      let accessStatusConverted = accessStatus === 'Permitido' ? true : false

      const leader = await prisma.leader.findUnique({
        select: {
          name: true,
          password: true,
          accessStatus: true,
          corporation: {
            select: {
              name: true
            }
          }
        },
        where: {
          id: leaderId
        }
      })

      if (!leader) {
        return reply.status(404).send({ message: 'Leader not found' })
      }

      const updateLeader = await prisma.leader.update({
        where: {
          id: leaderId
        },
        data: {
          name: name || leader.name,
          password: password || leader.password,
          accessStatus: accessStatusConverted,
          corporation: {
            update: {
              name: corporationName || leader.corporation?.name
            }
          }
        }
      })

      if (!updateLeader) {
        return reply.status(409).send({ message: 'Leader not updated' })
      }

      return reply.send({
        name: updateLeader.name,
        password: updateLeader.password,
        corporationName: corporationName,
        accessStatus: updateLeader.accessStatus
      })
    }
  )
}
