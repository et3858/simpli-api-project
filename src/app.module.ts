import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';
import { CompaniesController } from './companies/companies.controller';
import { EmployeesController } from './employees/employees.controller';

// Services
import { AppService } from './app.service';
import { CompanyService } from './companies/companies.service';
import { EmployeeService } from './employees/employees.service';

@Module({
  imports: [],
  controllers: [AppController, CompaniesController, EmployeesController],
  providers: [AppService, CompanyService, EmployeeService],
})
export class AppModule {}
