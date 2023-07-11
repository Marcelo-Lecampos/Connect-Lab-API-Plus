import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';
import { LinkSensorParamDtoDoc as doc } from '../shared/documentation/swagger-dto/link-sensor-param.dto.doc';
export class LinkSensorParamDto {
  @ApiProperty(doc.ApiPropertyDoc)
  @IsNumberString()
  location_id: string;
}
