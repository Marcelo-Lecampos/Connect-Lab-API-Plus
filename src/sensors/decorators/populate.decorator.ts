import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PopulateDoc } from '../shared/documentation/swagger-controller/Post-populate.doc';

export function ApiPopulateDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(PopulateDoc.ApiOperationDoc),
    ApiResponse(PopulateDoc.ApiResponse),
  );
}
