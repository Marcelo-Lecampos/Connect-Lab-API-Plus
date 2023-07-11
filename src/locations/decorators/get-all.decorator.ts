import { applyDecorators, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { FindAllWithSensorsDoc } from "../shared/documentation/swagger-controller/Get-all.doc";

export function ApiFindAllWithSensorsDoc<T>(dto?: Type<T>): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(FindAllWithSensorsDoc.ApiOperationDoc),
    ApiOkResponse(FindAllWithSensorsDoc.ApiOkResponse),
    ApiBadRequestResponse(FindAllWithSensorsDoc.ApiBadRequestResponseDoc),
  );
}