import { NestFactory } from '@nestjs/core';
// NestFactory exposes a few static methods that allow creating an application instance.
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // The AppModule is the root module of the NestJS application, which is responsible for configuring and organizing the application's components, controllers, and services.
  await app.listen(3000);
}
bootstrap();
// By convention, the bootstrap function is called at the end of the file to start the application when the file is executed.
// NestFactory exposes a few static methods that allow creating an application instance.
// The create() method returns an application object, which fulfills the INestApplication interface
// This object provides a set of methods which are described in the coming chapters.
// main.ts example above, we simply start up our HTTP listener, which lets the application await inbound HTTP requests.

// bootstrap means to boot or to load a program into a computer using a much smaller initial program to load in the desired program, which is usually an OS