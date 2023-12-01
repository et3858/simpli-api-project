import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ICompany } from './interfaces/company.interface';


@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getCompanies(): Promise<ICompany[]> {
    return this.companyService.getCompanies();
  }

  @Post()
  @HttpCode(201)
  async createCompany(@Body() dto: CreateCompanyDto): Promise<ICompany> {
    return this.companyService.createCompany(dto);
  }

  @Get(':id')
  async findCompany(@Param('id') id: string): Promise<ICompany> {
    return this.companyService.getCompany(id);
  }

  @Put(':id')
  async updateCompany(@Param('id') id: string, @Body() dto: UpdateCompanyDto): Promise<ICompany> {
    return this.companyService.updateCompany(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async removeCompany(@Param('id') id: string) {
    return this.companyService.removeCompany(id);
  }
}
