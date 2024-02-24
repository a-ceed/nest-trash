import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VotesService } from './votes.service';
import { Vote } from './schemas/vote.schema';

// express
// app.use((req, res, next) => {
//   res.status(201).end('Poka')
// })

@Controller('api/votes')
export class VotesController {

  constructor(private readonly votesService: VotesService) {
  }

  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Poke')
  //   return 'getAll'
  // }

  @Get()
  getAll(): Promise<Vote[]> {
    return this.votesService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Vote> {
    return this.votesService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createVoteDto: CreateVoteDto): Promise<Vote> {
    return this.votesService.create(createVoteDto)
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<Product> {
  //   return this.productsService.remove(id)
  // }

  @Put(':id')
  update(@Body() updateVoteDto: UpdateVoteDto, @Param('id') id: string): Promise<Vote> {
    return this.votesService.update(id, updateVoteDto)
  }

}
