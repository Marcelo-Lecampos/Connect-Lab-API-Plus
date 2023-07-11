export const UnlinkSensorDoc = {
  ApiOperation: {
    summary: 'Desvincula sensores de local',
    description: '🔌 Este endpoint desvincula sensor de local.',
  },
  ApiResponseSuccess: {
    status: 200,
    description: 'Retorna uma mensagem de sucesso para a desvinculação',
    schema: {
      example: {
        response: 'Sensor desvinculado de local com sucesso!',
        status: 200,
        message: 'Sensor desvinculado de local com sucesso!',
      },
    },
  },
  ApiResponseNotFound: {
    status: 404,
    description: 'Sensor e local recebidos não estão vinculados',
    schema: {
      example: {
        error: {
          response: 'Sensor e local recebidos não estão vinculados',
          status: 404,
          message: 'Houve um erro, parâmetro recebido não válido',
          name: 'HttpException',
        },
      },
    },
  },
};
