export const FindSensorsDoc = {
  ApiOperation: {
    summary: 'Busca sensores de local',
    description:
      '🔍 Este endpoint retorna uma lista dos sensores vinculados ao local',
  },
  ApiResponseSuccess: {
    status: 200,
    description: 'Retorna uma array com sensores vinculados ao local',
    schema: {
      example: [
        {
          sensor_id: 1,
          available_sensor_id: 3,
          name: 'Sensor de temperatura enviado',
          createdAt: '2023-04-11',
          macAddress: '3D-F2-C9-A6-B3-4F',
          active: true,
        },
      ],
    },
  },
  ApiResponseNotFound: {
    status: 404,
    description: 'O  ID informado no parâmetro não esta registrado ',
    schema: {
      example: {
        error: {
          message: 'Local não encontrado',
        },
      },
    },
  },
  ApiParam: {
    name: 'location_id',
    description: 'ID do local',
    example: 1,
  },
};
