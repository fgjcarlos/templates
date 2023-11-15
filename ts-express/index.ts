import ExpressServer from './src/server/expressServer'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { morganMiddleware } from './src/logger/morgan.middleware'
import { logger } from './src/logger/logger.'

const HOST: string = process.env.HOST || 'localhost'
const PORT: number = Number(process.env.PORT) || 3000

const server = new ExpressServer(HOST, PORT)

try {
  // ## Create app server
  const app: express.Express = server.getExpress()

  // ## Middelwares
  app.use(cors())
  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morganMiddleware);

  // ## Routes
  app.get('/', (req, res) => {
    logger.log
    res.send('Welcome to EasyRiderRentals API');
  });

  // ## Server listen default port 3000
  server.listen()
} catch (e) {
  logger.error
  process.exit(1)
}