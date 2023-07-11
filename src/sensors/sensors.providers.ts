import { DataSource } from 'typeorm';
import { LocationEntity } from 'src/locations/entities/location.entity';
import { SensorEntity } from './entities/sensor.entity';
import { MeasurementEntity } from './entities/measurement.entity';
import { AvailableSensorsEntity } from './entities/available-sensors.entity';

export const sensorsProviders = [
  {
    provide: 'SENSORS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SensorEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'AVAILABLE_SENSORS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AvailableSensorsEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'MEASUREMENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(MeasurementEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'LOCATIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(LocationEntity),
    inject: ['DATA_SOURCE'],
  },
];
