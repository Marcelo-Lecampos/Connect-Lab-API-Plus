import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { updateDoc } from '../shared/documentation/swagger-controller/Put-update.doc';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';

export function ApiUpdateDoc<T>(dto?: Type<T>): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(updateDoc.ApiOperationDoc),
    ApiResponse(updateDoc.ApiResponse.Success),
    ApiResponse(sharedResponses.Unauthorized),
  );
}
