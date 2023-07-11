import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { signUpDoc } from '../shared/documentation/swagger-controller/Post-signUp.doc';

export function ApiSignUpDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(signUpDoc.ApiOperationDoc),
    ApiResponse(signUpDoc.ApiResponse.Success),
    ApiResponse(signUpDoc.ApiResponse.Conflict),
  );
}
