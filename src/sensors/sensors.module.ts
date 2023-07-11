import { Module } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { SensorsController } from './sensors.controller';
import { sensorsProviders } from './sensors.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { ScheduleModule } from '@nestjs/schedule';
import { CronSensorsMeasurements } from './cron/sensorsMeasurements.cron';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [SensorsController],
  providers: [
    SensorsService,
    ...sensorsProviders,
    ...databaseProviders,
    CronSensorsMeasurements,
  ],
})
export class SensorsModule {}
