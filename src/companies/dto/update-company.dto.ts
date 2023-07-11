import {
  Equals,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Match } from 'src/core/constraints/match.decorator';
import { phone } from 'src/utils/validations';
import { UpdateCompanyErrors } from '../shared/dto-erros/updated-company.errors';
import { ApiProperty } from '@nestjs/swagger';
import { updateCompanyApiProperty } from '../shared/documentation/swagger-dto/updateCompany.ApiProperty';

const { telephone, password, confirmPassword } = UpdateCompanyErrors;
const doc = updateCompanyApiProperty;
export class UpdateCompanyDto {
  @ApiProperty(doc.phone)
  @IsOptional()
  @IsString(telephone.stringPhone)
  @Matches(phone, telephone.matchesPhone)
  readonly phone: string;

  @ApiProperty(doc.password)
  @IsOptional()
  @IsString(password.stringPassword)
  @MinLength(8, password.minLengthPassword)
  readonly password: string;

  @ApiProperty(doc.confirmPassword)
  @Match('password', confirmPassword.matchConfirmPassword)
  readonly confirmPassword: string;
}
