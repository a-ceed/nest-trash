import { Injectable } from '@nestjs/common';
import * as fs from "fs";

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

@Injectable()
export class AppService {
  public rating: Rating;

  constructor() {
    this.rating = this.loadRatingFromFile();
  }

  saveNumber(company: string): void {
    this.rating[company] += 1;
    this.saveRatingToFile();
  }

  getStoredNumber(): Rating {
    return this.rating;
  }

  private loadRatingFromFile(): Rating {
    try {
      const data = fs.readFileSync('data.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Ошибка при чтении файла:', error);
      return this.rating;
    }
  }

  private saveRatingToFile(): void {
    const data = JSON.stringify(this.rating);
    fs.writeFileSync('data.json', data);
  }
}
