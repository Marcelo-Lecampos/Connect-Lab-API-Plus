import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { CompanyEntity } from "src/companies/entities/company.entity";
import { Repository } from "typeorm";
import { CredentialsDTO } from "../dto/credentials.dto";


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @Inject('COMPANIES_REPOSITORY')
        private companyRepository: Repository<CompanyEntity>
    ){}

    async checkCredentials(credentials: CredentialsDTO) {
        const { email, password } = credentials;
        const company = await this.companyRepository.findOne({
            where: {
                email:email,
            }
        })

        if (company && (await company.checkPassword(password))) {   
            return company;
        }
        return null;
    }

    private async hashPassword(senha: string, salt: string): Promise<string> {
        return bcrypt.hash(senha, salt);
    }

    validateToken(jwtToken: string) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.jwtService.verifyAsync(jwtToken, {
                    ignoreExpiration: false
                }))                
            } catch (error) {
                reject({
                    code: 401,
                    detail: 'JWT expired.'
                })
            }
        })
    }

    decodedToken(jwtToken: string) {
        return this.jwtService.decode(jwtToken);
    }
}