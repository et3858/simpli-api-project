import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';


@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company,
  ) {}

  async getCompanies(): Promise<Company[]> {
    return this.companyModel.findAll();
  }

  async createCompany(dto: CreateCompanyDto): Promise<Company> {
    const company = await this.companyModel.create({ ...dto });

    return company;
  }

  async getCompany(id: string): Promise<Company> {
    return this.companyModel.findByPk(id);
  }

  async updateCompany(id: string, dto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyModel.findByPk(id);

    company.set(dto);
    await company.save();

    return company;
  }

  async removeCompany(id: string) {
    const company = await this.companyModel.findByPk(id);
    await company.destroy();
  }
}
