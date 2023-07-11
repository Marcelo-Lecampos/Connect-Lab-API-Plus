import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { meDoc } from '../shared/documentation/swagger-controller/Get-Me.doc';

export function ApiMeDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(meDoc.ApiOperationDoc),
    ApiResponse(meDoc.ApiResponse.Success),
    ApiResponse(meDoc.ApiResponse.Unauthorized),
  );
}
