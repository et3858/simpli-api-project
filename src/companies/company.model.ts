import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Employee } from 'src/employees/employee.model';

@Table({
    tableName: 'companies',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Company extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        allowNull: false,
    })
    name: string;

    @Column({
        allowNull: false,
    })
    dni: string;

    @Column({
        allowNull: false,
    })
    address: string;

    @Column({
        allowNull: false,
    })
    phone_number: string;

    @Column({
        type: DataType.DATE,
    })
    created_at: string;

    @Column({
        type: DataType.DATE,
    })
    updated_at: string;

    @HasMany(() => Employee)
    employees: Employee[]
}
