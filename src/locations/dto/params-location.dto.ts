import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';
import { ParamLocationDoc as doc } from '../shared/documentation/swagger-dto/ParamLocation.ApiProperty';


export class LocationParamDto {
  @ApiProperty(doc.ApiPropertyDoc)
  @IsNumberString()
  location_id: string;
}
