import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { forgotPasswordDoc } from '../shared/documentation/swagger-controller/Post-forgotPassword.doc';

export function ApiForgotPasswordDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(forgotPasswordDoc.ApiOperationDoc),
    ApiResponse(forgotPasswordDoc.ApiResponse.Success),
    ApiResponse(forgotPasswordDoc.ApiResponse.NotFound),
  );
}
