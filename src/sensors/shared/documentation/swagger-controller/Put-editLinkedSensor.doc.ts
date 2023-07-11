export const EditLinkedSensorDoc = {
  ApiOperation: {
    summary: 'Edita configurações dos sensores do local',
    description: '💽 Edita configurações dos sensores do local',
  },
  ApiResponseSuccess: {
    status: 200,
    description: 'Retorna uma mensagem de sucesso para a desvinculação',
    schema: {
      example: {
        "sensor_id": 9,
        "name": "Teste edit 3",
        "createdAt": "2023-04-23",
        "macAddress": "33-75-12-04-26-54",
        "active": true,
        "availableSensorId": 2
      },
    },
  },
  ApiResponseNotFound: {
    status: 404,
    description: 'Retorna uma mensagem de erro para a desvinculação',
    schema: {
      example: {
        "error": "Este usuário não possui um sensor com o id 91 vinculado"
      },
    },
  },
};
