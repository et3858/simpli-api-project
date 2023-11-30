import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployees() {
    return this.employeeService.getEmployees();
  }

  @Post()
  @HttpCode(201)
  async createEmployee(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(dto);
  }

  @Get(':id')
  async findEmployee(@Param('id') id: string) {
    return this.employeeService.getEmployee(id);
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async removeEmployee(@Param('id') id: string) {
    return this.employeeService.removeEmployee(id);
  }
}
