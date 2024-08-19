import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // aplico la validacion de pipes a nivel global de la aplicacion
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // limpia los campos de informacion no solicitada.
  }));

  const config = new DocumentBuilder()
  .setTitle('Api Documentation')
  .setDescription('My first api in NestJs with Prisma')
  .setVersion('1.0')
  .addTag('Nest-Api')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors(  //corrijo el error de acceso al servidor para hacer peticiones ( Cors );
    // { origin: 'https//localhost:4000', } // le espesifico que dominio tiene permitido realizar peticiones a nuestro back (es el url declarado) .
  )
  
  await app.listen(4000);
};

bootstrap();
