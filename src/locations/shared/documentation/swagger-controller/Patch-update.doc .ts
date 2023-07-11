export const UpdateDoc = {
  ApiOperationDoc: {
    summary: ' Atualiza localização por ID',
    description: '🗺️ Atualiza a localização de um objeto pelo seu ID',
  },
  ApiOkResponse: {
    description: 'Localidade atualizada com sucesso',
    schema: {
      example: {
        message: 'Local atualizado com sucesso',
      },
    },
  },
  ApiNotFoundResponseDoc: {
    description: 'Localidade não encontrada',
    schema: {
      example: {
        status: 404,
        message: 'Local não encontrado',
        name: 'HttpException',
      },
    },
  },
};
