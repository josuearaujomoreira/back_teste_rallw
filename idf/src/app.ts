import fastify from 'fastify'
import fastifyCors from '@fastify/cors'

import { appRoutes } from './v1/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET
})

app.register(appRoutes)

app.register(fastifyCors, {
  origin: '*'
})
