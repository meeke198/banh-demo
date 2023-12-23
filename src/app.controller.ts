import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controllers are responsible for handling incoming requests and returning responses to the client.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
// A controller's purpose is to receive specific requests for the application. 
// The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.