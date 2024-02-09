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

@Controller('company')
export class AppController {
  constructor(private readonly numberService: AppService) {}

  @Options()
  options() {
    return 'OK';
  }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  @Header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
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