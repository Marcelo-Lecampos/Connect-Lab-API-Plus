import { applyDecorators, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FindAllAvailableSensorsDoc } from '../shared/documentation/swagger-controller/Get-findAllAvailableSensors.doc';

export function ApiFindAllAvailableSensorsDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(FindAllAvailableSensorsDoc.ApiOperation),
    ApiOkResponse(FindAllAvailableSensorsDoc.ApiOkResponse),
    ApiBadRequestResponse(FindAllAvailableSensorsDoc.ApiBadRequestResponse),
  );
}
