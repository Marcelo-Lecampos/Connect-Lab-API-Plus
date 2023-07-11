import { PartialType } from '@nestjs/mapped-types';
import { LinkSensorDto } from './link-sensor.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateSensorDtoDoc } from '../shared/documentation/swagger-dto/edit-sensor.dto.doc';
const { ApiPropertyDoc } = UpdateSensorDtoDoc;	

export class UpdateSensorDto extends PartialType(LinkSensorDto) {
    @ApiProperty(ApiPropertyDoc.name)
    name: string;
  
    @ApiProperty(ApiPropertyDoc.macAddress)
    macAddress: string;
  
    @ApiProperty(ApiPropertyDoc.active)
    active: boolean;
  
    @ApiProperty(ApiPropertyDoc.availableSensorId)
    availableSensorId: number;
}
