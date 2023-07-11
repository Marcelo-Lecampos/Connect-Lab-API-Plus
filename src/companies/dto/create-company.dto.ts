import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Match } from 'src/core/constraints/match.decorator';
import { cnpj, phone } from 'src/utils/validations';
import * as error from '../shared/dto-erros/create-company.errors';
import { createCompanyApiProperty } from '../shared/documentation/swagger-dto/createCompany.ApiProperty';

const doc = createCompanyApiProperty;
export class CreateCompanyDTO {
  @ApiProperty(doc.company)
  @IsNotEmpty(error.createCompanyErros.company.emptyCompany)
  @IsString(error.createCompanyErros.company.stringCompany)
  readonly company: string;

  @ApiProperty(doc.cnpj)
  @IsNotEmpty(error.createCompanyErros.cnpj.emptyCnpj)
  @IsString(error.createCompanyErros.cnpj.stringCnpj)
  @Matches(cnpj, error.createCompanyErros.cnpj.Matches)
  readonly cnpj: string;

  @ApiProperty(doc.responsible)
  @IsNotEmpty(error.createCompanyErros.responsible.emptyResponsible)
  @IsString(error.createCompanyErros.responsible.stringResponsible)
  readonly responsible: string;

  @ApiProperty(doc.email)
  @IsNotEmpty(error.createCompanyErros.email.emptyEmail)
  @IsString(error.createCompanyErros.email.stringEmail)
  @IsEmail(undefined, error.createCompanyErros.email.IsEmail)
  readonly email: string;

  @ApiProperty(doc.phone)
  @IsNotEmpty(error.createCompanyErros.phone.emptyPhone)
  @IsString(error.createCompanyErros.phone.stringPhone)
  @Matches(phone, error.createCompanyErros.phone.Matches)
  readonly phone: string;

  @ApiProperty(doc.password)
  @IsNotEmpty(error.createCompanyErros.password.emptyPassword)
  @IsString(error.createCompanyErros.password.stringPassword)
  @MinLength(8, error.createCompanyErros.password.MinLenght)
  readonly password: string;

  @ApiProperty(doc.confirmPassword)
  @IsNotEmpty(error.createCompanyErros.confirmPassword.emptyConfirmPassword)
  @IsString(error.createCompanyErros.confirmPassword.stringConfirmPassword)
  @MinLength(8, error.createCompanyErros.confirmPassword.MinLenght)
  @Match('password', error.createCompanyErros.confirmPassword.Match)
  readonly confirmPassword: string;
}
