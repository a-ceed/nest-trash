import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { Company, CompanySchema } from './schemas/company.schema';

@Module({
  providers: [CompaniesService],
  controllers: [CompaniesController],
  imports: [
    MongooseModule.forFeature([
      {name: Company.name, schema: CompanySchema}
    ])
  ]
})
export class CompaniesModule {
}