import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NextFunction, Request, Response } from 'express'

function globalmiddleware1(req: Request, res: Response, next: NextFunction) {
  console.log(`this is global middleware 1`)
  // You can add logic or modifications to the request/response here.
  next() // Call next to pass control to the next middleware or route handler.
}

function globalmiddleware2(req: Request, res: Response, next: NextFunction) {
  console.log(`this is global middleware 2`)
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(globalmiddleware1)
  app.use(globalmiddleware2)
  await app.listen(3000)

  console.log('server is working 3000')
}

bootstrap()
