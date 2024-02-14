import {Body, Controller, Get, Post, Header, Options} from '@nestjs/common';
import { AppService } from './app.service';

interface Rating {
  Cola: number;
  BP: number;
  Starbucks: number;
  PhilipM: number;
  McDonalds: number;
  Nestle: number;
  Pepsi: number;
  Unilever: number;
  ProcterG: number;
  Monsanto: number;
  Mondelez: number;
  Mars: number;
}

@Controller('/api/company')
export class AppController {
  constructor(private readonly numberService: AppService) {}


  @Post()
  saveNumber(@Body() requestBody: { company: string }): string {
    const { company } = requestBody;
    this.numberService.saveNumber(company);
    return 'Рейтинг сохранен';
  }

  @Get()
  getStoredNumber(): Rating {
    return this.numberService.getStoredNumber();
  }
}