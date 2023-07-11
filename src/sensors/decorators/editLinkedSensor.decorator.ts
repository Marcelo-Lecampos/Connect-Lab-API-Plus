import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';
import { EditLinkedSensorDoc } from '../shared/documentation/swagger-controller/Put-editLinkedSensor.doc';

export function ApiEditLinkedSensorDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(EditLinkedSensorDoc.ApiOperation),
    ApiResponse(EditLinkedSensorDoc.ApiResponseSuccess),
    ApiResponse(EditLinkedSensorDoc.ApiResponseNotFound),
    ApiResponse(sharedResponses.Unauthorized),
  );
}
