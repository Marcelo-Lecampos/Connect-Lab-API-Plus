import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';
import { RegisterMeasurementDoc } from '../shared/documentation/swagger-controller/Put-registerMeasurement.doc';

export function ApiRegisterMeasurementDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(RegisterMeasurementDoc.ApiOperationDoc),
    ApiNotFoundResponse(RegisterMeasurementDoc.ApiNotFoundResponse),
    ApiOkResponse(RegisterMeasurementDoc.ApiOkResponse),
    ApiParam(RegisterMeasurementDoc.ApiParam),
    ApiResponse(sharedResponses.Unauthorized),
  );
}
