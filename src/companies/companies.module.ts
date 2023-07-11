import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { databaseProviders } from 'src/core/database/database.providers';
import { companyProviders } from './company.providers';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/core/auth/service/auth.service';

@Module({
  controllers: [CompaniesController],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '6h',
      },
    }),
  ],
  providers: [
    ...databaseProviders,
    ...companyProviders,
    CompaniesService,
    AuthService,
  ],
})
export class CompaniesModule {}
