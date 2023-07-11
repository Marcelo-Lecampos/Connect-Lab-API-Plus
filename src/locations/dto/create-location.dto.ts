import { IsNotEmpty, IsString } from 'class-validator';
import { createLocationErros as message } from 'src/locations/shared/dto-erros/createLocation.errors';
import { IsDecimalWithFourDecimals } from 'src/locations/constraints/IsDecimalWithFourDecimals';
import { IsLatitude } from '../constraints/isLatitude';
import { IsLongitude } from '../constraints/IsLongitude';
import { IsNumber } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { createLocationApiProperty } from 'src/locations/shared/documentation/swagger-dto/createLocation.ApiProperty';



const { fieldName, latitude, longitude } = message;
const { emptyName, stringName } = fieldName;
const { emptyLatitude, numberLatitude } = latitude;
const { emptyLongitude, numberLongitude } = longitude;
const doc = createLocationApiProperty;
export class CreateLocationDto {


  @ApiProperty(doc.fieldName)
  @IsNotEmpty(emptyName)
  @IsString(stringName)
  readonly fieldName: string;

  @ApiProperty(doc.latitude
   )
  @IsNotEmpty(emptyLatitude)
  @IsNumber({}, numberLatitude)
  @IsLatitude()
  @IsDecimalWithFourDecimals()
  readonly latitude: string;

  @ApiProperty(doc.longitude)
  @IsNotEmpty(emptyLongitude)
  @IsNumber({}, numberLongitude)
  @IsLongitude()
  @IsDecimalWithFourDecimals()
  readonly longitude: string;
  
}
