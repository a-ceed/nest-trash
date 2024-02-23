import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVoteDto } from './dto/create-vote.dto';
import { Vote, VoteDocument } from './schemas/vote.schema';
import { UpdateVoteDto } from './dto/update-vote.dto';

@Injectable()
export class VotesService {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>) {
  }

  async getAll(): Promise<{ title: string, rating: number }[]> {
    const aggregationResult = await this.voteModel.aggregate([
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

  async getById(id: string): Promise<Vote> {
    return this.voteModel.findById(id) as Promise<Vote>;
  }

  async create(voteDto: CreateVoteDto): Promise<Vote> {
    const newVote = new this.voteModel(voteDto)
    return newVote.save() as Promise<Vote>;
  }

  // async remove(id: string): Promise<Product> {
  //   return this.productModel.findByIdAndRemove(id)
  // }

  async update(id: string, companyDto: UpdateVoteDto): Promise<Vote> {
    return this.voteModel.findByIdAndUpdate(id, companyDto, {new: true}) as Promise<Vote>;
  }

  async updateByTitle(title: string, companyDto: UpdateVoteDto): Promise<Vote> {
    return this.voteModel.findByIdAndUpdate(title, companyDto, {new: true}) as Promise<Vote>;
  }
}