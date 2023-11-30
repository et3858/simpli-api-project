import { Module } from '@nestjs/common';
import { EmployeeService } from './employees.service';
import { EmployeesController } from './employees.controller';

@Module({
    providers: [EmployeeService],
    controllers: [EmployeesController],
})
export class EmployeeModule {}
