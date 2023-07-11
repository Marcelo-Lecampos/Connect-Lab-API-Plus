import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { DeleteDoc } from '../shared/documentation/swagger-controller/Delete-delete.doc';

export function ApiDeleteDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(DeleteDoc.ApiOperationDoc),
    ApiNotFoundResponse(DeleteDoc.ApiNotFoundResponseDoc),
    ApiOkResponse(DeleteDoc.ApiOkResponseDoc),
  );
}
