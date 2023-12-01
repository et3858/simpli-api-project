import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { DatabaseModule } from './core/database/database.module';
import { CompanyModule } from './companies/company.module';
import { EmployeeModule } from './employees/employees.module';


@Module({
  imports: [DatabaseModule, CompanyModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
