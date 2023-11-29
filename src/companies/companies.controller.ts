import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  getCompanies(): string[] {
    return this.companyService.getCompanies();
  }

  @Post()
  @HttpCode(201)
  createCompany(): string {
    return this.companyService.createCompany();
  }

  @Get(':id')
  findCompany(@Param('id') id: string): string {
    return this.companyService.getCompany();
  }

  @Put(':id')
  updateCompany(@Param('id') id: string): string {
    return this.companyService.updateCompany();
  }

  @Delete(':id')
  @HttpCode(204)
  removeCompany(@Param('id') id: string): string {
    return this.companyService.removeCompany();
  }
}
