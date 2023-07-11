import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { signInDoc } from '../shared/documentation/swagger-controller/Post-signIn.doc';

export function ApiSignIDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(signInDoc.ApiOperationDoc),
    ApiResponse(signInDoc.ApiResponse.Success),
    ApiResponse(signInDoc.ApiResponse.Unauthorized),
  );
}
