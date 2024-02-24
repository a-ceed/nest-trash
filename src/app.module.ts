import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {OptionsMiddleware} from "./OptionsMiddleware";
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import {MongooseModule} from "@nestjs/mongoose";
import { CompaniesModule } from './companys/companies.module';
import {VotesModule} from "./vote/votes.module";

@Module({
  imports: [
    CompaniesModule,
    VotesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
    }),
    MongooseModule.forRoot('mongodb://mongodb/trash'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(OptionsMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
