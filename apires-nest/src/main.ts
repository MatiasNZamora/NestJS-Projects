import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe() ); // cuando cree validaciones en varios dto siempre van a validarce.
  await app.listen(4000);
}
bootstrap();
