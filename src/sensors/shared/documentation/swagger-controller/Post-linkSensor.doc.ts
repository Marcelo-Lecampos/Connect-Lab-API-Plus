export const LinkSensorDoc = {
  ApiOperationDoc: {
    summary: 'Linka um sensor a um local',
    description: '🔌 Linka um sensor a um local',
  },
  ApiNotFoundResponse: {
    description: 'Local não encontrado ou Sensor não encontrado',
    content: {
      'application/json': {
        examples: {
          'Local não encontrado': {
            value: {
              statusCode: 404,
              message: 'Local não encontrado',
            },
          },
          'Sensor não encontrado': {
            value: {
              statusCode: 404,
              message: 'Sensor não encontrado',
            },
          },
        },
      },
    },
  },
  ApiConflictResponse: {
    description: 'Sensor já vinculado a outro local',
    schema: {
      example: {
        error: {
          detail: 'Key ("macAddress")=(3D-F2-C9-A6-B3-4F) already exists.',
          code: '23505',
        },
      },
    },
  },
  ApiOkResponse: {
    description: 'Sensor vinculado ao local com sucesso',
    schema: {
      example: {
        name: 'Sensor de temperatura enviado',
        macAddress: 'FC-C7-9C-BC-30-DE',
        active: true,
        location: {
          location_id: 3,
          fieldName: 'Name teste 3',
          latitude: '10.1234',
          longitude: '10.1234',
        },
        availableSensor: {
          available_sensor_id: 1,
          name: 'Sensor de Umidade do Solo 1',
          type: 'umidade_do_solo',
          minRange: 0,
          maxRange: 100,
          barcode: '123456789',
          batch: 'ABC123',
        },
        sensor_id: 3,
        createdAt: '2023-04-11',
      },
    },
  },
  ApiParam: {
    name: 'location_id',
    description: 'ID do local',
    example: 1,
  }
};
