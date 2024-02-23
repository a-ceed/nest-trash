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
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompaniesService } from './companies.service';
import { Company } from './schemas/Company.schema';

// express
// app.use((req, res, next) => {
//   res.status(201).end('Poka')
// })

@Controller('api/companies')
export class CompaniesController {

  constructor(private readonly companiesService: CompaniesService) {
  }

  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Poke')
  //   return 'getAll'
  // }

  @Get()
  getAll(): Promise<Company[]> {
    return this.companiesService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto)
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<Product> {
  //   return this.productsService.remove(id)
  // }

  @Put(':id')
  update(@Body() updateCompanyDto: UpdateCompanyDto, @Param('id') id: string): Promise<Company> {
    return this.companiesService.update(id, updateCompanyDto)
  }

}
