import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';

const COMPANIES = ['Amazon', 'Apple', 'Google', 'Microsoft'];

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company,
  ) {}

  getCompanies(): string[] {
    return COMPANIES;
  }

  createCompany(): string {
    return "A new company was created";
  }

  getCompany(): string {
    return COMPANIES[0];
  }

  updateCompany(): string {
    return COMPANIES[1];
  }

  removeCompany(): string {
    return "Company removed";
  }
}
