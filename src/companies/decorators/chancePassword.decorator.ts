import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChangePasswordDoc } from '../shared/documentation/swagger-controller/Patch-changePassword.doc';

export function ApiChangePasswordDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(ChangePasswordDoc.ApiOperationDoc),
    ApiResponse(ChangePasswordDoc.ApiResponse.Success),
    ApiResponse(ChangePasswordDoc.ApiResponse.NotFound),
    ApiResponse(ChangePasswordDoc.ApiResponse.UNAUTHORIZED),
    ApiResponse(ChangePasswordDoc.ApiResponse.BadRequest),

  );
}
