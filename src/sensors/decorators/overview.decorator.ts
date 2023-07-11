import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';
import { OverviewDoc } from '../shared/documentation/swagger-controller/get-overview.doc ';

export function ApiOverviewDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(OverviewDoc.ApiOperationDoc),
    ApiOkResponse(OverviewDoc.ApiOkResponseDoc),
    ApiNotFoundResponse(OverviewDoc.ApiNotFoundResponseDoc),
    ApiResponse(sharedResponses.Unauthorized),
  );
}
