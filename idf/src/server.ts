import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT
  })
  .then(() => {
    console.log(
      `🚀 Server listening on ${env.RAILWAY_PUBLIC_DOMAIN}:${env.PORT}`
    )
  })
