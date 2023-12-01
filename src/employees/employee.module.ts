import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
    imports: [SequelizeModule.forFeature([Employee])],
    providers: [EmployeeService],
    controllers: [EmployeeController],
})
export class EmployeeModule {}
