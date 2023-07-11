import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UnlinkSensorDoc } from '../shared/documentation/swagger-controller/Post-unlinkSensor.doc';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';

export function ApiUnlinkSensorDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(UnlinkSensorDoc.ApiOperation),
    ApiResponse(UnlinkSensorDoc.ApiResponseSuccess),
    ApiResponse(UnlinkSensorDoc.ApiResponseNotFound),
    ApiResponse(sharedResponses.Unauthorized),
  );
}
