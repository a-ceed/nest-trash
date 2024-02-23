import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company, CompanyDocument } from './schemas/company.schema';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {
  }

  async getAll(): Promise<{ title: string, rating: number }[]> {
    const aggregationResult = await this.companyModel.aggregate([
      {
        $group: {
          _id: "$title",
          rating: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          title: "$_id",
          rating: 1
        }
      }
    ]);

    return aggregationResult;
  }

  async getById(id: string): Promise<Company> {
    return this.companyModel.findById(id) as Promise<Company>;
  }

  async create(companyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = new this.companyModel(companyDto)
    return newCompany.save() as Promise<Company>;
  }

  // async remove(id: string): Promise<Product> {
  //   return this.productModel.findByIdAndRemove(id)
  // }

  async update(id: string, companyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(id, companyDto, {new: true}) as Promise<Company>;
  }

  async updateByTitle(title: string, companyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(title, companyDto, {new: true}) as Promise<Company>;
  }
}