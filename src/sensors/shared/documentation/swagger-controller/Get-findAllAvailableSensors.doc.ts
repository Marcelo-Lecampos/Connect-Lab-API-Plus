export const FindAllAvailableSensorsDoc = {
  ApiOperation: {
    summary: 'Busca tipos de sensores disponíveis.',
    description:
      '🔎 Este endpoint retorna uma lista com os sensores que podem ser vinculados aos locais.',
  },
  ApiOkResponse: {
    description: 'Retorna a lista de sensores disponíveis.',
    schema: {
      example: [
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
  },
  ApiBadRequestResponse: {
    description: 'Retorna um erro caso ocorra algum problema.',
    schema: {
      example: {
        error: {
          response:
            'Houve um erro, tente novamente mais tarde ou entre em contato com o suporte.',
          status: 400,
          message:
            'Houve um erro, tente novamente mais tarde ou entre em contato com o suporte.',
          name: 'HttpException',
        },
      },
    },
  },
};
