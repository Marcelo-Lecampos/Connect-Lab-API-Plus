import { IsEmail, IsString, MinLength } from "@nestjs/class-validator";

export class CredentialsDTO{
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(8)
    readonly password: string;
}