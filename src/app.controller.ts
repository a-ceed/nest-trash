import { Body, Controller, Get, Post, Header } from '@nestjs/common';
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

@Controller('company')
export class AppController {
  constructor(private readonly numberService: AppService) {}

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  saveNumber(@Body() requestBody: { company: string }): string {
    const { company } = requestBody;
    this.numberService.saveNumber(company);
    return 'Рейтинг сохранен';
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  getStoredNumber(): Rating {
    return this.numberService.getStoredNumber();
  }
}