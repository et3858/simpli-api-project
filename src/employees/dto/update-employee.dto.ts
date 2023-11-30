import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEmployeeDto {
    @IsOptional()
    @IsNotEmpty()
    readonly first_name: string;

    @IsOptional()
    @IsNotEmpty()
    readonly last_name: string;

    @IsOptional()
    @IsNotEmpty()
    readonly dni: string;

    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}
