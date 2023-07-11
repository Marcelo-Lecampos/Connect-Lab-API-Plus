import { IsString } from '@nestjs/class-validator';
import { IsNumber } from 'class-validator';
export class FindAllAvailableSensorsSuccessfulResponseDto {
  @IsNumber()
  available_sensor_id: number;

  @IsString()
  name: string;
}
