import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Request,
  Put,
  UseGuards,
  Res,
  HttpCode,
  Patch,
} from '@nestjs/common';
import {
  HttpException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { CompaniesService } from './companies.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginCompanyDTO } from './dto/login-company.dto';
import { ForgotPasswordCompanyDTO } from './dto/forgotPassword-company.dto';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiUpdateDoc } from './decorators/update.decorator';
import { ApiSignUpDoc } from './decorators/signUp.decorator';
import { ApiSignIDoc } from './decorators/signIn.decorator';
import { ApiForgotPasswordDoc } from './decorators/forgotPassword.decorator';
import { CompanyDto } from './dto/me-company.dto';
import { ApiMeDoc } from './decorators/me.decotrator';
import { checkPassDTO } from './dto/new-password.dto';
import { ApiChangePasswordDoc } from './decorators/chancePassword.decorator';
import { CompanyEntity } from './entities/company.entity';

@ApiTags('companies')
@Controller('company')
export class CompaniesController {
  constructor(
    private jwtService: JwtService,
    private readonly companiesService: CompaniesService,
  ) {}

  @ApiUpdateDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('/perfil')
  async update(
    // 🐛 bug: ao atualizar sem nenhuma informação no body ou atualizar sem
    @Request() req,
    @Body() updateCompanyDto: UpdateCompanyDto,
    @Res() response: Response,
  ) {
    try {
      const updated = await this.companiesService.updateProfile(
        req.user.id,
        updateCompanyDto,
      );

      response.status(HttpStatus.OK).send(updated);
    } catch (error) {
      if (typeof error === 'object') {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, message: error.message },
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiSignUpDoc()
  @Post('/cadastro')
  async signUp(
    @Body() createCompanyDto: CreateCompanyDTO,
  ): Promise<CompanyEntity> {
    try {
      return await this.companiesService.signUp(createCompanyDto);
    } catch (error) {
      if (error.code == 23505)
        throw new HttpException(
          { message: error.detail, errorCode: HttpStatus.CONFLICT },
          HttpStatus.CONFLICT,
        );

      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiSignIDoc()
  @HttpCode(200)
  @Post('/login')
  async signIn(@Body() loginCompanyDTO: LoginCompanyDTO): Promise<{ token }> {
    if (!(await this.companiesService.findOne(loginCompanyDTO.email))) {
      throw new UnauthorizedException(
        'Este e-mail não consta no nosso banco de dados!',
      );
    }
    return await this.companiesService.signIn(loginCompanyDTO);
  }

  @ApiForgotPasswordDoc()
  @Post('/esqueci-senha')
  async forgotPassword(
    @Body() forgotPasswordDTO: ForgotPasswordCompanyDTO,
  ): Promise<{ code: number; message: string }> {
    if (!(await this.companiesService.findOne(forgotPasswordDTO.email))) {
      throw new NotFoundException(
        'O e-mail informado não está cadastrado. Por favor, verifique o e-mail digitado e tente novamente.',
      );
    }
    return await this.companiesService.forgotPassword(forgotPasswordDTO.email);
  }

  @ApiMeDoc()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('/me')
  async findMe(@Request() req: any): Promise<CompanyDto> {
    try {
      const companyGet = await this.companiesService.findMe(+req.user.id);
      return companyGet;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiChangePasswordDoc()
  @Patch('changepassword')
  async changePassword(@Body() checkPass: checkPassDTO) {
    try {
      const changePassword = await this.companiesService.changePassword(
        checkPass,
      );
      if (changePassword) {
        return changePassword;
      }
      if (!changePassword) {
        throw new HttpException(
          { error: 'Algo errado ocorreu, entre em contato com o suporte' },
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      if (error.code === 400) {
        throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
      }
      if (error.code === 404) {
        throw new HttpException({ error }, HttpStatus.NOT_FOUND);
      }
    }
  }
}
