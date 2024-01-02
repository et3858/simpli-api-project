import { Injectable, Inject } from '@nestjs/common';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyRepository } from './company.repository';


@Injectable()
export class CompanyService {
  constructor(
    @Inject(CompanyRepository)
    private readonly companyRepository: CompanyRepository
  ) {}

  async getCompanies(): Promise<Company[]> {
    const companies = await this.companyRepository.findAll();

    return companies;
  }

  async createCompany(dto: CreateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.create(dto);

    return company;
  }

  async getCompany(id: string): Promise<Company> {
    return this.companyRepository.findById(id);
  }

  async updateCompany(id: string, dto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.update(id, dto);

    return company;
  }

  async removeCompany(id: string) {
    await this.companyRepository.deleteById(id);
  }
}
