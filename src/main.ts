import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApiDocs } from './common/api-docs';
import { ValidationPipe } from '@nestjs/common';
// import { SensorsController } from './sensors/sensors.controller';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  setupApiDocs(app);
  await app.listen(3000);
  // await app.get(SensorsController).populate();
}
bootstrap();
