import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { FastifyInstance } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'
import { createEvent } from './events/create-event'
import { registerForEvent } from './attendees/register-for-event'
import { getEvent } from './events/get-event'
import { getAllEvents } from './events/get-all-events'
import { getAttendeeBadge } from './attendees/get-attendee-badge'
import { checkIn } from './check-ins/check-in'
import { authenticateAttendee } from './auth/sessions'
import { ZodError } from 'zod'
import { getEventAttendeesByCorporation } from './events/get-event-attendees-by-corporation'
import { EditAttendeeForEvent } from './attendees/edit-attendee-for-event'
import { DeleteAttendeeForEvent } from './attendees/delete-attendee-for-event'
import { deleteEvent } from './events/delete-event'
import { createLeader } from './leader/create-leader'
import { createCorporation } from './corporation/create-corporation'
import { editCorporation } from './corporation/edit-corporation'
import { getCorporation } from './corporation/get-corporation'
import { deleteLeader } from './leader/delete-leader'
import { getAllLeaders } from './leader/get-all-leaders'
import { editLeader } from './leader/edit-leader'
import { getAllProducts } from './product/get-all-product'
import { createProduct } from './product/create-product'
import { createOrder } from './order/create-order'
import { getOrder } from './order/get-order'
import { confirmPaymentOrder } from './order/confirm-payment-order'
import { saveComprovantOrder } from './order/save-comprovant-order'
import { cancelOrder } from './order/cancel-roder'
import { getAllOrders } from './order/get-all-orders'

export async function appRoutes(app: FastifyInstance) {
  app.register(fastifySwagger, {
    swagger: {
      consumes: ['application/json'],
      produces: ['application/json'],
      info: {
        title: 'api-idf',
        description:
          'API do Instituto Desenhando o Futuro para gerenciamento de eventos e participantes.',
        version: '1.0.0'
      }
    },
    transform: jsonSchemaTransform
  })

  app.register(fastifySwaggerUi, {
    routePrefix: '/api/v1/docs'
  })

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)

  app.register(createEvent)
  app.register(deleteEvent)
  app.register(registerForEvent)
  app.register(EditAttendeeForEvent)
  app.register(DeleteAttendeeForEvent)
  app.register(getEvent)
  app.register(getAllEvents)
  app.register(getAttendeeBadge)
  app.register(checkIn)
  app.register(authenticateAttendee)
  app.register(getEventAttendeesByCorporation)
  app.register(createLeader)
  app.register(getAllLeaders)
  app.register(editLeader)
  app.register(deleteLeader)
  app.register(createCorporation)
  app.register(getCorporation)
  app.register(editCorporation)
  app.register(createProduct)
  app.register(getAllProducts)
  app.register(createOrder)
  app.register(getOrder)
  app.register(getAllOrders)
  app.register(confirmPaymentOrder)
  app.register(saveComprovantOrder)
  app.register(cancelOrder)

  app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
      return reply.status(400).send({
        message: `Error during validation`,
        errors: error.flatten().fieldErrors
      })
    }
    return reply.status(500).send({
      message: 'internal server error'
    })
  })
}
