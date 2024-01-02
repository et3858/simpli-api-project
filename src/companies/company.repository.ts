import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';


import { CompanyRepository as ICompanyRepository } from '../domain/repositories/companyRepository.interface';


@Injectable()
export class CompanyRepository implements ICompanyRepository {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyModel.findAll();
  }

  async create(content: object): Promise<Company> {
    const company = await this.companyModel.create({ ...content });

    return company;
  }

  async findById(id: string): Promise<Company> {
    const company = await this.companyModel.findByPk(id);

    if (!company) {
      throw new NotFoundException("Company not found");
    }

    return company;
  }

  async update(id: string, content: object): Promise<Company> {
    const company = await this.companyModel.findByPk(id);

    if (!company) {
      throw new NotFoundException("Company not found");
    }

    company.set(content);
    await company.save();

    return company;
  }

  async deleteById(id: string): Promise<void> {
    const company = await this.companyModel.findByPk(id);

    if (!company) {
      throw new NotFoundException("Company not found");
    }

    await company.destroy();
  }
}
