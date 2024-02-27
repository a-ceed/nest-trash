import { Injectable } from '@nestjs/common';
import * as fs from "fs";

export interface Rating {
  cola: number;
  bp: number;
  starbucks: number;
  philipmorris: number;
  mcdonalds: number;
  nestle: number;
  pepsi: number;
  unilever: number;
  proctergamble: number;
  monsanto: number;
  mondelez: number;
  mars: number;
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

  private loadRatingFromFile(): any {
    // try {
    //   const data = fs.readFileSync('data.json', 'utf-8');
    //   return JSON.parse(data);
    // } catch (error) {
    //   console.error('Ошибка при чтении файла:', error);
    //   return this.rating;
    // }
  }

  private saveRatingToFile(): void {
  //   const data = JSON.stringify(this.rating);
  //   fs.writeFileSync('data.json', data);
   }
}
