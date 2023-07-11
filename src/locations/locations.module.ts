import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { locationsProviders } from './locations.providers';
import { databaseProviders } from 'src/core/database/database.providers';



@Module({
  controllers: [LocationsController],
  providers: [LocationsService, ...locationsProviders, ...databaseProviders],
})
export class LocationsModule {}
