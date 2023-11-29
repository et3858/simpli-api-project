import { Injectable } from '@nestjs/common';

const EMPLOYEES = ['Lorena', 'Alejandro', 'Gonzalo', 'Macarena'];

@Injectable()
export class EmployeeService {
  getEmployees(): string[] {
    return EMPLOYEES;
  }

  createEmployee(): string {
    return "A new employee was created";
  }

  getEmployee(): string {
    return EMPLOYEES[0];
  }

  updateEmployee(): string {
    return EMPLOYEES[1];
  }

  removeEmployee(): string {
    return "Employee removed";
  }
}
