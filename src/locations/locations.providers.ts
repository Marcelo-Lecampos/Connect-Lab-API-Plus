import { DataSource } from 'typeorm';
import { LocationEntity } from './entities/location.entity';
import { CompanyEntity } from 'src/companies/entities/company.entity';
import { SensorEntity } from 'src/sensors/entities/sensor.entity';
import { AvailableSensorsEntity } from 'src/sensors/entities/available-sensors.entity';

export const locationsProviders = [
  {
    provide: 'LOCATIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(LocationEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'COMPANIES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CompanyEntity),
    inject: ['DATA_SOURCE'],
  },
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
];
