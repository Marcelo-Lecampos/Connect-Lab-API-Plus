import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

import { createSensorErrors } from '../shared/dto-errors/create-sensor.errors';

const { name, type, minRange, maxRange, barcode, batch } = createSensorErrors;

export class CreateSensorDto {
  @IsString(name.notString)
  @IsNotEmpty(name.isEmpty)
  readonly name: string;

  @IsString(type.notString)
  @IsNotEmpty(type.isEmpty)
  readonly type: string;

  @IsNumber({}, minRange.notNumber)
  @IsNotEmpty(minRange.isEmpty)
  readonly minRange: number;

  @IsNumber({}, maxRange.notNumber)
  @IsNotEmpty(maxRange.isEmpty)
  readonly maxRange: number;

  @IsString(barcode.notString)
  @IsNotEmpty(barcode.isEmpty)
  readonly barcode: string;

  @IsString(batch.notString)
  @IsNotEmpty(batch.isEmpty)
  readonly batch: string;
}
