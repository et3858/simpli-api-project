import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.model';
import { CompanyService } from './companies.service';
import { CompaniesController } from './companies.controller';

@Module({
    imports: [SequelizeModule.forFeature([Company])],
    providers: [CompanyService],
    controllers: [CompaniesController],
})
export class CompanyModule {}
