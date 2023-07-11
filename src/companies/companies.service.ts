import { Inject, Injectable, UnauthorizedException, HttpException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { CompanyEntity } from './entities/company.entity';
import * as bcrypt from 'bcrypt';
import { LoginCompanyDTO } from './dto/login-company.dto';
import { AuthService } from '../core/auth/service/auth.service'
import { JwtService } from '@nestjs/jwt';
import { ForgotPasswordCompanyDTO } from './dto/forgotPassword-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyDto } from './dto/me-company.dto';
import { checkPassDTO } from './dto/new-password.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANIES_REPOSITORY')
    private companyRepository: Repository<CompanyEntity>,
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  async signUp(createCompanyDto: CreateCompanyDTO): Promise<CompanyEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const { company, cnpj, responsible, email, phone, password } =
          createCompanyDto;

        const createCompany = this.companyRepository.create();
        createCompany.company = company;
        createCompany.cnpj = cnpj;
        createCompany.responsible = responsible;
        createCompany.email = email;
        createCompany.phone = phone;
        createCompany.salt = await bcrypt.genSalt();
        createCompany.password = await this.hashPassword(
          password,
          createCompany.salt,
        );
        const companyCreated = this.companyRepository.save(createCompany);
        delete (await companyCreated).password;
        delete createCompany.salt;
        resolve(companyCreated);
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail,
        });
      }
    });
  }

  async signIn(credentials: LoginCompanyDTO) {
    const company = await this.authService.checkCredentials(credentials);
    if (company === null) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos! Não foi possível realizar o login');
    }

    const jwtPayload = {
      id: company.company_id, 
      name: company.company, 
      email: company.email
    }
    const token = this.jwtService.sign(jwtPayload);
    return { token };
  }

  async forgotPassword(email: string) {
    if (await this.findOne(email)) {
      return {
        code: 200,
        message: 'E-mail encontrado, redirecionando você para o formulário de alterar a senha!'
      }
    }
  }

  findAll() {
    return `This action returns all companies`;
  }

  async findOne(email: string) {
    const userExists = await this.companyRepository.findOne({
      where: {
        email: email,
      },
    });
    return userExists;
  }

  async updateProfile(id: number, updateCompanyDto: UpdateCompanyDto){
    return new Promise(async (resolve, reject) => {
      try {
        let { phone, password, confirmPassword} = updateCompanyDto;
        const findCompany = await this.companyRepository.findOne({
          where:{
            company_id: id
          }
        });
        
        if(!findCompany){
          return reject({message: `Empresa de ID ${id} não foi encontrada`})
        }
        
        if(password === undefined && phone !== undefined){
          await this.companyRepository.update(id, {phone: phone});
          return resolve({ message: 'Telefone atualizado'});
        }
  
        password = await bcrypt.hash(password, findCompany.salt)
  
        if(phone !== undefined && findCompany.checkPassword(password)){
          await this.companyRepository.update(id, {password: password});
          await this.companyRepository.update(id, {phone: phone});
          return resolve({ message: 'Telefone e senha atualizados'})
        }
  
        await this.companyRepository.update(id, {password: password});
        resolve({ message: 'Senha atualizada'});

      } catch (error) {
        reject({ message: 'Nenhum campo válido recebido para atualizar informações', code: 400 });
      }
    });
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async findMe(companyId: any): Promise<CompanyDto> {
    return new Promise(async (resolve, reject) => {
      try{
        const company = await this.companyRepository.findOne({
          where: {
            company_id: companyId
          }
        });

        if(!company){
          return reject({message: `Empresa de ID ${companyId} não foi encontrada`})
        }
        const { password, salt, ...result } = company;
        const companyData = {
          ...result
        }

  
      resolve(companyData);
      }catch(error){
        reject(error);
      }
    });
  }

  async changePassword(forgotPasswordCompanyDto: checkPassDTO){
    return new Promise(async (resolve, reject) => {
      try {
        const { newPassword, email} = forgotPasswordCompanyDto;
        const findCompany = await this.companyRepository.findOne({
          where:{
            email: email,
          }
        });
        
        if(!findCompany){
          return reject({message: `Empresa de email ${email} não foi encontrada`, code: 404})
        }

        const password = await bcrypt.hash(newPassword, findCompany.salt)

        await this.companyRepository.update(findCompany.company_id, {password: password});
        resolve({ message: 'Senha atualizada'});

      } catch (error) {
        reject({ message: "Contate o suporte, erro desconhecido", code: 400 });

      }
    });
  }
}
