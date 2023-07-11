import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { forgotPasswordCompanyErros } from '../shared/dto-erros/forgotPassword-company.errors';
import { ApiProperty } from '@nestjs/swagger';
import { forgotPasswordCompanyApiProperty } from '../shared/documentation/swagger-dto/forgotPasswordCompany.ApiProperty';
const { error } = forgotPasswordCompanyErros;

const doc = forgotPasswordCompanyApiProperty;
export class ForgotPasswordCompanyDTO {
  @ApiProperty(doc.email)
  @IsNotEmpty(error.emptyEmail)
  @IsString(error.stringEmail)
  @IsEmail(undefined, error.IsEmail)
  readonly email: string;
}
