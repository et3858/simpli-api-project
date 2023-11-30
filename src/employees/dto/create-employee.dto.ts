import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
    @IsDefined()
    @IsNotEmpty()
    readonly first_name: string;

    @IsDefined()
    @IsNotEmpty()
    readonly last_name: string;

    @IsDefined()
    @IsNotEmpty()
    readonly dni: string;

    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}
