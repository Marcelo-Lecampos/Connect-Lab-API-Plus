import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CompaniesModule } from './companies/companies.module';
import { SensorsModule } from './sensors/sensors.module';
import { LocationsModule } from './locations/locations.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/core/auth/guard/jwt-strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '6h',
      },
    }),
    CompaniesModule,
    SensorsModule,
    LocationsModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
