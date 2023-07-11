export const PopulateDoc = {
  ApiOperationDoc: {
    summary: 'Popula a tabela de locations com dados de teste',
    description: '🌱 Popula a tabela de locations com dados de teste',
  },
  ApiResponse: {
    status: 200,
    content: {
      'application/json': {
        examples: {
          'Tabela é populada corretamente': {
            value: [
              {
                available_sensor_id: 1,
                name: 'Sensor de Umidade do Solo 1',
              },
              {
                available_sensor_id: 2,
                name: 'Sensor de Temperatura 1',
              },
              {
                available_sensor_id: 3,
                name: 'Sensor de Umidade 1',
              },
              {
                available_sensor_id: 4,
                name: 'Sensor de Temperatura do Solo 1',
              },
              {
                available_sensor_id: 5,
                name: 'Identificação de Agrotóxicos 1',
              },
              {
                available_sensor_id: 6,
                name: 'Sensor de Qualidade do Ar 1',
              },
            ],
          },
          'Sensores padrão já estão no banco de dados': {
            value: {
              message: 'Sensores padrão já estão no banco de dados',
              statusCode: 200,
            },
          },
        },
      },
    },
  },
};

