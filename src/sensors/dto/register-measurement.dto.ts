import { IsNotEmpty } from '@nestjs/class-validator';
import { IsNumber } from 'class-validator';
import { registerMeasurementErrors } from '../shared/dto-errors/register-measurement.errors';
import { ApiProperty } from '@nestjs/swagger';
import { registerMeasurementApiProperty } from '../shared/documentation/swagger-dto/register-measurement.dto.doc';

const { measurement } = registerMeasurementErrors;

export class RegisterMeasurementDto {
  @IsNotEmpty(measurement.notEmpty)
  @IsNumber({}, measurement.notNumber)
  @ApiProperty(registerMeasurementApiProperty.measurement)
  readonly measurement: number;
}
