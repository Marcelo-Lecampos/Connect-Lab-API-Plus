import { applyDecorators, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { FindIdSensorDoc } from '../shared/documentation/swagger-controller/Get-id.doc';


export function ApifindOneWithSensorsDoc<T>(dto?: Type<T>): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOperation(FindIdSensorDoc.ApiOperationDoc),
    ApiOkResponse(FindIdSensorDoc.ApiOkResponse),
    ApiBadRequestResponse(FindIdSensorDoc.ApiBadRequestResponseDoc)
  );
}