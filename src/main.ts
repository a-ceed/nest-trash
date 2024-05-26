import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from "compression";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Чтобы работал корс
  app.enableCors({
    origin: 'http://localhost:8080', // замените на ваш домен
  });

 // app.use(compression());
  await app.listen(3000);
}
bootstrap();
