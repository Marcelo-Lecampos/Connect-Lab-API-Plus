import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { ApiProperty } from '@nestjs/swagger';
import {updateLocationApiProperty as doc} from 'src/locations/shared/documentation/swagger-dto/updateLocation.ApiProperty ';


export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  @ApiProperty(doc.fieldName)
  readonly fieldName: string;

  @ApiProperty(doc.latitude)
  readonly latitude: string;

  @ApiProperty(doc.longitude)
  readonly longitude: string;
}
