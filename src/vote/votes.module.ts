import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { Vote, VoteSchema } from './schemas/vote.schema';

@Module({
  providers: [VotesService],
  controllers: [VotesController],
  imports: [
    MongooseModule.forFeature([
      {name: Vote.name, schema: VoteSchema}
    ])
  ]
})
export class VotesModule {
}