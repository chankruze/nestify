import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, '0.0.0.0'); // specify '0.0.0.0' in the listen() for all hosts
}
bootstrap();

// https://docs.nestjs.com/techniques/performance
// https://fastify.dev/docs/latest/Reference/Middleware/
