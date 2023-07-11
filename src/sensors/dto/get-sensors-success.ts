import { LocationEntity } from 'src/locations/entities/location.entity';
import { MeasurementEntity } from '../entities/measurement.entity';

export class GetSensorsSuccess {
  available_sensor_id: number;
  sensor_id: number;
  name: string;
  createdAt: Date;
  macAddress: string;
  active: boolean;
  location: LocationEntity;
  measurements: MeasurementEntity[];
}
