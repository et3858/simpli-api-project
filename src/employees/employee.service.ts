import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';


@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee)
    private employeeModel: typeof Employee,
  ) {}

  async getEmployees(): Promise<Employee[]> {
    return this.employeeModel.findAll({
      include: 'company'
    });
  }

  async createEmployee(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = await this.employeeModel.create({ ...dto });
    await employee.loadCompany();

    return employee;
  }

  async getEmployee(id: string): Promise<Employee> {
    return this.employeeModel.findByPk(id, {
      include: 'company',
    });
  }

  async updateEmployee(id: string, dto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.employeeModel.findByPk(id);

    employee.set(dto);
    await employee.save();
    await employee.loadCompany();

    return employee;
  }

  async removeEmployee(id: string) {
    const employee = await this.employeeModel.findByPk(id);
    await employee.destroy();
  }
}
