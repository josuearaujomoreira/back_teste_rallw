import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function authenticateAttendee(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/api/v1/sessions',
    {
      schema: {
        summary: 'Authenticate a user and return a session token',
        tags: ['auth'],
        body: z.object({
          email: z.string().email().toLowerCase(),
          password: z.string()
        }),
        response: {
          200: z.object({
            user: z.object({
              email: z.string(),
              userId: z.number(),
              corporationId: z.number(),
              accessStatus: z.string(),
              type: z.string()
            }),
            token: z.string()
          }),
          404: z.object({
            message: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { email, password } = request.body

      const leader = await prisma.leader.findUnique({
        select: {
          email: true,
          password: true,
          id: true,
          accessStatus: true,
          corporation: {
            select: {
              id: true,
              name: true
            }
          }
        },
        where: {
          email
        }
      })

      const attendee = await prisma.attendee.findUnique({
        select: {
          email: true,
          password: true,
          id: true,
          type: true,
          corporation: {
            select: {
              id: true,
              name: true,
              leader: {
                select: {
                  accessStatus: true
                }
              }
            }
          }
        },
        where: {
          email
        }
      })

      if (!leader && !attendee) {
        return reply.status(404).send({
          message: 'Credentials do not match'
        })
      }

      if (leader) {
        if (leader.password !== password) {
          return reply.status(404).send({
            message: 'Credentials do not match'
          })
        }
      }

      let accessStatus = 'unauthorized'

      if (leader) {
        const token = await reply.jwtSign(
          {},
          {
            sign: {
              sub: leader.id.toString()
            }
          }
        )

        if (leader.accessStatus === true) {
          accessStatus = 'authorized'
        }

        if (leader && leader.corporation) {
          if (leader.id == 8) {
            return reply.send({
              user: {
                email: leader.email,
                userId: leader.id,
                corporationId: leader.corporation.id,
                accessStatus,
                type: 'ADMIN'
              },
              token
            })
          }
          return reply.send({
            user: {
              email: leader.email,
              userId: leader.id,
              corporationId: leader.corporation.id,
              accessStatus,
              type: 'LEADER'
            },
            token
          })
        }
      }

      if (attendee) {
        if (password !== attendee.password) {
          return reply.status(404).send({
            message: 'Credentials do not match'
          })
        }

        const token = await reply.jwtSign(
          {},
          {
            sign: {
              sub: attendee.id.toString()
            }
          }
        )

        if (attendee.corporation.leader.accessStatus === true) {
          accessStatus = 'authorized'
        }

        if (attendee && attendee.corporation) {
          let type = ''

          if (attendee.type === 'ATTENDEE') {
            type = 'ATTENDEE'
          }
          if (attendee.type === 'DRIVER') {
            type = 'DRIVER'
          }

          if (attendee.type === 'ESCORT') {
            type = 'ESCORT'
          }

          return reply.send({
            user: {
              email: attendee.email,
              userId: attendee.id,
              corporationId: attendee.corporation.id,
              accessStatus,
              type
            },
            token
          })
        }
      }
    }
  )
}
