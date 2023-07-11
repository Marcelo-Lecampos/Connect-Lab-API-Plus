import { LocationEntity } from 'src/locations/entities/location.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MeasurementEntity } from './measurement.entity';
import { AvailableSensorsEntity } from './available-sensors.entity';

@Entity({ name: 'sensors' })
export class SensorEntity {
  @PrimaryGeneratedColumn()
  sensor_id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @CreateDateColumn({ type: 'date', nullable: false })
  createdAt: Date;

  @Column({ type: 'varchar', nullable: false, unique: true })
  macAddress: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  active: boolean;

  @ManyToOne(() => LocationEntity, (location) => location.sensor, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'location_id' })
  location: LocationEntity;

  @OneToMany(() => MeasurementEntity, (measurement) => measurement.sensors)
  measurements: MeasurementEntity[];

  @ManyToOne(
    () => AvailableSensorsEntity,
    (availableSensor) => availableSensor.sensors,
    {
      cascade: true,
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'available_sensor_id' })
  availableSensor: AvailableSensorsEntity;
}
