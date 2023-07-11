import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';
import { SensorEntity } from './sensor.entity';

@Entity({ name: 'measurements' })
export class MeasurementEntity {
  @PrimaryGeneratedColumn()
  measurement_id: number;

  @CreateDateColumn({ type: 'date', nullable: false })
  createdAt: Date;

  @Column({ type: 'float', nullable: false })
  measurement: number;

  @ManyToOne(() => SensorEntity, (sensor) => sensor.measurements, {
    cascade: true,
    onDelete: 'SET NULL',
    })
  @JoinColumn({ name: 'sensor_id' })
  sensors: SensorEntity;
}
