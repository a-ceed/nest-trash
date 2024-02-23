import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type CompanyDocument = Company & Document

@Schema()
export class Company {
  @Prop()
  title: string

  @Prop()
  rating: number
}

export const CompanySchema = SchemaFactory.createForClass(Company)