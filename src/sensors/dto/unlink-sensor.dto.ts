import { IsNumber } from '@nestjs/class-validator';
import { IsNotEmpty } from 'class-validator';
import { unlikSensorError } from '../shared/dto-errors/unlink-sensor.errors';
import { ApiProperty } from '@nestjs/swagger';
import { unlikSensorApiProperty } from '../shared/documentation/swagger-dto/unlink-sensor.dto.doc';

const { location_id, sensor_id } = unlikSensorError;
const doc = unlikSensorApiProperty;

export class UnlinkSensorDTO {
  @ApiProperty(doc.location_id)
  @IsNumber({}, location_id.isNumberLocation)
  @IsNotEmpty(location_id.isNotEmptyLocation)
  location_id: number;

  @ApiProperty(doc.sensor_id)
  @IsNumber({}, sensor_id.isNumberSensor)
  @IsNotEmpty(sensor_id.isNotEmptySensor)
  sensor_id: number;
}
