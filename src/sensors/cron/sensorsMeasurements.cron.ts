import { Cron } from '@nestjs/schedule';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MeasurementEntity } from '../entities/measurement.entity';
import { SensorEntity } from '../entities/sensor.entity';

@Injectable()
export class CronSensorsMeasurements {
  constructor(
    @Inject('MEASUREMENTS_REPOSITORY')
    private readonly measurementsRepository: Repository<MeasurementEntity>,
    @Inject('SENSORS_REPOSITORY')
    private readonly sensorsRepository: Repository<SensorEntity>,
  ) {}

  @Cron('0 0 * * * *')
  async register() {
    const sensors = await this.sensorsRepository.find({
      where: {
        active: true,
      },
      relations: {
        availableSensor: true,
      },
    });

    sensors.forEach(async (sensor) => {
      const { maxRange, minRange } = sensor.availableSensor;
      const measurement = this.measurementsRepository.create();
      const findMeasurement = await this.measurementsRepository.findOne({
        where: {
          createdAt: new Date(),
          sensors: {
            sensor_id: sensor.sensor_id,
          },
        },
      });

      if (findMeasurement) {
        const newRange = Math.floor(Math.random() * 10) - 5;
        measurement.measurement = findMeasurement.measurement + newRange;
        measurement.sensors = sensor;
        await this.measurementsRepository.save(measurement);
        return;
      }

      if (minRange < 0) {
        const maxNum = maxRange * 2 + 1;
        const randomRange = Math.floor(Math.random() * maxNum) - maxRange;
        measurement.measurement = randomRange;
        measurement.sensors = sensor;
        await this.measurementsRepository.save(measurement);
        return;
      }

      const randomRange = Math.floor(Math.random() * maxRange) + 1;
      measurement.measurement = randomRange;
      measurement.sensors = sensor;
      await this.measurementsRepository.save(measurement);
      return;
    });
  }
}
