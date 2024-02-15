import {Body, Controller, Get, Post, Header, Options} from '@nestjs/common';
import { AppService } from './app.service';
import { Rating } from './app.service';

@Controller('/api/company')
export class AppController {
  constructor(private readonly numberService: AppService) {}


  @Post()
  saveNumber(@Body() requestBody: { company: string }): object {
    const { company } = requestBody;
    this.numberService.saveNumber(company);
    return { success: 'Ok'};
  }

  @Get()
  getStoredNumber(): Rating {
    return this.numberService.getStoredNumber();
  }
}