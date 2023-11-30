import { IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateCompanyDto {
    @IsOptional()
    @IsNotEmpty()
    readonly name: string;

    @IsOptional()
    @IsNotEmpty()
    readonly dni: string;

    @IsOptional()
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone_number: string;
}
