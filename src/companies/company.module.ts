import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.model';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';

@Module({
    imports: [SequelizeModule.forFeature([Company])],
    providers: [CompanyService, CompanyRepository],
    controllers: [CompanyController],
})
export class CompanyModule {}
