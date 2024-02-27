import {MiddlewareConsumer, Module, OnModuleInit, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {OptionsMiddleware} from "./OptionsMiddleware";
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import {MongooseModule} from "@nestjs/mongoose";
import { CompaniesModule } from './companys/companies.module';
import {VotesModule} from "./vote/votes.module";

const DB_HOST = process.env.DB_HOST || '172.20.0.2'
const DB_PORT = process.env.DB_PORT || '27017'
const DB_URL = 'mongodb://' + DB_HOST + ':' + DB_PORT + '/trash'

@Module({
  imports: [
    CompaniesModule,
    VotesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
    }),
    MongooseModule.forRoot(DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor() {
    console.log("конструктор")
    console.log("DB_URL", DB_URL)
  }
  onModuleInit() {
    console.log('db connecting ok');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(OptionsMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
