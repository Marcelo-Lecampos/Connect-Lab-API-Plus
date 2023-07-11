import { DataSource } from 'typeorm';
import { CompanyEntity } from './entities/company.entity';

export const companyProviders = [
  {
    provide: 'COMPANIES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CompanyEntity),
    inject: ['DATA_SOURCE'],
  },
];
