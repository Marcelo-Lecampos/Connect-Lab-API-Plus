export const FindAllWithSensorsDoc = {
    ApiOperationDoc: {
      summary: 'Busca todas as localizações com sensores disponíveis',
      description: '📲 Retorna uma lista de todas as localizações que possuem pelo menos um sensor disponível',
    },
    ApiOkResponse: {
      description: 'Lista de localizações com sensores disponíveis',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            location_id: { type: 'number', example: 6 },
            fieldName: { type: 'string', example: 'Florianópolis' },
            latitude: { type: 'number', example: '27.5948' },
            longitude: { type: 'number', example: '48.5569' },
            sensorCount : { type: 'number', example: 7 },
          },
        },
      },
    },
    ApiBadRequestResponseDoc: {
      description: 'Erro ao buscar localizações com sensores disponíveis',
      schema: {
        example: {
          status: 400,
          message: 'Bad Request',
          error: 'Erro ao buscar localizações com sensores disponíveis',
        },
      },
    },
  };