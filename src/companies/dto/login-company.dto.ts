import { IsEmail, IsNotEmpty, IsString, MinLength } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import * as error from '../shared/dto-erros/login-company.errors'
import { loginCompanyApiProperty } from "../shared/documentation/swagger-dto/loginCompany.ApiProperty";

const doc = loginCompanyApiProperty;
export class LoginCompanyDTO {
    @ApiProperty(doc.email)
    @IsNotEmpty(error.loginCompanyErrors.email.emptyEmail)
    @IsString(error.loginCompanyErrors.email.stringEmail)
    @IsEmail(undefined, error.loginCompanyErrors.email.IsEmail)
    readonly email: string;

    @ApiProperty(doc.password)
    @IsNotEmpty(error.loginCompanyErrors.password.emptyPassword)
    @IsString(error.loginCompanyErrors.password.stringPassword)
    @MinLength(8, error.loginCompanyErrors.password.MinLenght)
    readonly password: string;
}