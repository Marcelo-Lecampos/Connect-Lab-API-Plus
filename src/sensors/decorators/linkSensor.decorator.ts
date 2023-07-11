import { applyDecorators, Type } from '@nestjs/common';
import { ApiConflictResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { LinkSensorDoc } from '../shared/documentation/swagger-controller/Post-linkSensor.doc';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';

export function ApiLinkSensorDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(LinkSensorDoc.ApiOperationDoc),
    ApiNotFoundResponse(LinkSensorDoc.ApiNotFoundResponse),
    ApiConflictResponse(LinkSensorDoc.ApiConflictResponse),
    ApiOkResponse(LinkSensorDoc.ApiOkResponse),
    ApiResponse(sharedResponses.Unauthorized),
    ApiParam(LinkSensorDoc.ApiParam),
  );
}
