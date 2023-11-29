import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getEmployees(): string[] {
    return this.employeeService.getEmployees();
  }

  @Post()
  @HttpCode(201)
  createEmployee(): string {
    return this.employeeService.createEmployee();
  }

  @Get(':id')
  findEmployee(@Param('id') id: string): string {
    return this.employeeService.getEmployee();
  }

  @Put(':id')
  updateEmployee(@Param('id') id: string): string {
    return this.employeeService.updateEmployee();
  }

  @Delete(':id')
  @HttpCode(204)
  removeEmployee(@Param('id') id: string): string {
    return this.employeeService.removeEmployee();
  }
}
