import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';
import { ParamLocationDoc } from 'src/locations/shared/documentation/swagger-dto/ParamLocation.ApiProperty';


export class SensorIdParamDto {
  @ApiProperty(ParamLocationDoc.ApiPropertyDoc2)
  @IsNumberString()
  sensor_id: string;
}
