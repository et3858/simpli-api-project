import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { IEmployee } from './interfaces/employee.interface';


@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployees(): Promise<IEmployee[]> {
    return this.employeeService.getEmployees();
  }

  @Post()
  @HttpCode(201)
  async createEmployee(@Body() dto: CreateEmployeeDto): Promise<IEmployee> {
    return this.employeeService.createEmployee(dto);
  }

  @Get(':id')
  async findEmployee(@Param('id') id: string): Promise<IEmployee> {
    return this.employeeService.getEmployee(id);
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() dto: UpdateEmployeeDto): Promise<IEmployee> {
    return this.employeeService.updateEmployee(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async removeEmployee(@Param('id') id: string) {
    return this.employeeService.removeEmployee(id);
  }
}
