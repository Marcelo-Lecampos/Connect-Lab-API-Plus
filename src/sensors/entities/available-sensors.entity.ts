import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SensorEntity } from './sensor.entity';

@Entity({ name: 'available_sensors' })
export class AvailableSensorsEntity {
  @PrimaryGeneratedColumn()
  available_sensor_id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  minRange: number;

  @Column()
  maxRange: number;

  @Column()
  barcode: string;

  @Column()
  batch: string;

  @OneToMany(() => SensorEntity, (sensor) => sensor.availableSensor)
  sensors: SensorEntity[];
}
