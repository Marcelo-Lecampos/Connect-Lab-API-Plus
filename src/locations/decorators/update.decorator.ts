import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UpdateDoc } from '../shared/documentation/swagger-controller/Patch-update.doc ';

export function ApiUpdateDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(UpdateDoc.ApiOperationDoc),
    ApiOkResponse(UpdateDoc.ApiOkResponse),
    ApiNotFoundResponse(UpdateDoc.ApiNotFoundResponseDoc),
  );
}
