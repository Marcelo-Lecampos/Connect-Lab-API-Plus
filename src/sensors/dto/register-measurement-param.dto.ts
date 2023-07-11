import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';
import { IsDecimal } from 'class-validator';
import { registerMeasurementErrors } from '../shared/dto-errors/register-measurement.errors';

const { sensor_id } = registerMeasurementErrors;

export class RegisterMeasurementParamDto {
  @IsNotEmpty(sensor_id.notEmpty)
  @IsDecimal({}, sensor_id.notNumber)
  sensor_id: number;
}
