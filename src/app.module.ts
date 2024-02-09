import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {OptionsMiddleware} from "./OptionsMiddleware";

@Module({
  imports: [],
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
