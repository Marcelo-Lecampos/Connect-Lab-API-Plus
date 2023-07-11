import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CreateDoc } from '../shared/documentation/swagger-controller/Post-create';

export function ApiCreateDoc<T>(
  dto?: Type<T>,
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(CreateDoc.ApiOperationDoc),
    ApiCreatedResponse(CreateDoc.ApiCreatedResponseDoc),
    ApiBadRequestResponse(CreateDoc.ApiBadRequestResponseDoc),
  );
}
