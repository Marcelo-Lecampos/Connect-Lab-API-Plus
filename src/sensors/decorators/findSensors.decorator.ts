import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { FindSensorsDoc } from '../shared/documentation/swagger-controller/Get-findSensors.doc';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';

export function ApiFindSensorsDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(FindSensorsDoc.ApiOperation),
    ApiResponse(FindSensorsDoc.ApiResponseSuccess),
    ApiResponse(FindSensorsDoc.ApiResponseNotFound),
    ApiParam(FindSensorsDoc.ApiParam),
    ApiResponse(sharedResponses.Unauthorized),
  );
}
