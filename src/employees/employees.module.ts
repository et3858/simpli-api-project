import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { EmployeeService } from './employees.service';
import { EmployeesController } from './employees.controller';

@Module({
    imports: [SequelizeModule.forFeature([Employee])],
    providers: [EmployeeService],
    controllers: [EmployeesController],
})
export class EmployeeModule {}
