import { IsNumber, IsString } from 'class-validator';

export class getLocationDto {
  @IsNumber()
  location_id: number;

  @IsString()
  fieldName: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsNumber()
  sensorCount: number;
}