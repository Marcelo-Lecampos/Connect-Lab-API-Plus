import { IsNotEmpty } from '@nestjs/class-validator';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { macAddressRegex } from 'src/utils/validations';
import { linkSensorsErrors } from '../shared/dto-errors/link-sensor.errors';
import { ApiProperty } from '@nestjs/swagger';
import { linkSensorApiProperty } from '../shared/documentation/swagger-dto/link-sensor.dto.doc';

const { availableSensorId, macAddress, name, active } = linkSensorsErrors;
export class LinkSensorDto {
  @IsNumber({}, availableSensorId.notNumber)
  @IsNotEmpty(availableSensorId.notEmpty)
  @ApiProperty(linkSensorApiProperty.availableSensorId)
  readonly availableSensorId: number;

  @IsString(name.notString)
  @IsNotEmpty(name.notEmpty)
  @ApiProperty(linkSensorApiProperty.name)
  readonly name: string;

  @IsBoolean(active.notBoolean)
  @ApiProperty(linkSensorApiProperty.active)
  @IsOptional()
  readonly active: boolean;

  @IsString(macAddress.notString)
  @IsNotEmpty(macAddress.notEmpty)
  @ApiProperty(linkSensorApiProperty.macAddress)
  @Matches(macAddressRegex, {
    message: macAddress.regex,
  })
  readonly macAddress: string;
}
