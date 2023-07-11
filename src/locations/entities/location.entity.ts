import { CompanyEntity } from 'src/companies/entities/company.entity';
import { SensorEntity } from 'src/sensors/entities/sensor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'locations' })
export class LocationEntity {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column({ type: 'varchar', nullable: false })
  fieldName: string;

  @Column({ type: 'varchar', nullable: false })
  latitude: string;

  @Column({ type: 'varchar', nullable: false })
  longitude: string;

  @ManyToOne(() => CompanyEntity, (company) => company.location,{
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @OneToMany(() => SensorEntity, (sensor) => sensor.location)
  sensor: SensorEntity[];
  

}
