export const RegisterMeasurementDoc = {
  ApiOperationDoc: {
    summary: 'Registra alterações de um sensor',
    description: '📈 Registra alterações de um sensor',
  },
  ApiNotFoundResponse: {
    description: 'Sensor vinculado não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Sensor vinculado não encontrado',
      },
    },
  },
  ApiOkResponse: {
    description: 'Alteração registrada com sucesso',
    schema: {
      example: {
        measurement: 10,
        sensors: {
          sensor_id: 1,
          name: 'Sensor de temperatura enviado',
          createdAt: '2023-04-12',
          macAddress: '3D:F2:C9:A6:B3:4F',
          active: true,
        },
        measurement_id: 1,
        createdAt: '2023-04-12',
      },
    },
  },
  ApiParam: {
    name: 'sensor_id',
    description: 'ID do sensor',
    example: 1,
  },
};
