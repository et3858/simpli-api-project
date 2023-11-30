import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Company } from 'src/companies/company.model';

@Table({
    tableName: 'employees',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Employee extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Company)
    @Column({
        allowNull: false,
    })
    company_id: number;

    @Column({
        allowNull: false,
    })
    first_name: string;

    @Column({
        allowNull: false,
    })
    last_name: string;

    @Column({
        allowNull: false,
    })
    dni: string;

    @Column({
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.DATE,
    })
    created_at: string;

    @Column({
        type: DataType.DATE,
    })
    updated_at: string;

    @BelongsTo(() => Company)
    company: Company;
}
