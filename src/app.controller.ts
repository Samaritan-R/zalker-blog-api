import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getHello(@Param('id') id) {
    return this.appService.getHello(id)
  }
}
