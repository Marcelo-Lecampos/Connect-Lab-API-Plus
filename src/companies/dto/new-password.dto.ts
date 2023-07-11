import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Match } from 'src/core/constraints/match.decorator';
import { newPasswordErros } from '../shared/dto-erros/new-password.erros';
import { checkPassApiProperty } from '../shared/documentation/swagger-dto/checkPass.ApiProperty';



export class checkPassDTO {
 @ApiProperty(checkPassApiProperty.email)
  @IsNotEmpty(newPasswordErros.email.emptyEmail)
  @IsEmail({}, newPasswordErros.email.IsEmail)
  readonly email: string;

  @ApiProperty(checkPassApiProperty.newPassword)
  @IsNotEmpty(newPasswordErros.newPassword.emptyPassword)
  @MinLength(8, newPasswordErros.newPassword.MinLenght)
  @IsString(newPasswordErros.newPassword.stringPassword)
  readonly newPassword: string;

  @ApiProperty(checkPassApiProperty.newPasswordConfirm)
  @Match('newPassword', newPasswordErros.newPasswordConfirm.Match)
  @IsNotEmpty(newPasswordErros.newPasswordConfirm.emptyPassword)
  @IsString(newPasswordErros.newPasswordConfirm.stringPassword)
  readonly newPasswordConfirm: string;
}