export const OverviewDoc = {
  ApiOperationDoc: {
    summary: 'Pega o Sensor e suas medições pelo ID da location',
    description: '📊 Pega o Sensor e suas medições pelo ID da location',
  },
  ApiOkResponseDoc: {
    description: 'Retorna um array de objetos sensor com suas medições',
    schema: {
      example: {
        sensor_id: 3,
        name: 'Meu sensor de temperatura',
        createdAt: '2023-04-12',
        macAddress: '3D-F2-C9-A6-B3-4D',
        active: true,
        measurements: [
          {
            "name": "Sensores do umidade campo de soja",
            "sensorName": "Sensor de Umidade do Solo 1",
            "measurementArr": [
              21,
              22,
              23
            ]
          },
          {
            "name": "Sensores de Umidade do campo de milho",
            "sensorName": "Sensor de Umidade 1",
            "measurementArr": []
          }
        ],
      },
    },
  },
  ApiNotFoundResponseDoc: {
    description: 'Local não encontrado',
    schema: {
      example: {
        status: 404,
        message: 'Local não encontrado',
        name: 'HttpException',
      },
    },
  },
};
