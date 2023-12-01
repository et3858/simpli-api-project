import { IsDefined, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateCompanyDto {
    @IsDefined()
    @IsNotEmpty()
    readonly name: string;

    @IsDefined()
    @IsNotEmpty()
    readonly dni: string;

    @IsDefined()
    @IsNotEmpty()
    readonly address: string

    @IsDefined()
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone_number: string;
}
