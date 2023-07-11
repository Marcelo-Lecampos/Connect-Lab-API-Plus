export const DeleteDoc = {
  ApiOperationDoc: {
    summary: 'Exclui uma location',
    description: '🗑️ Exclui uma location',
  },
  ApiNotFoundResponseDoc: {
    description: 'Local não encontrado',
    schema: {
      example: {
        message: 'Local não encontrado',
        errorCode: 404,
      },
    },
  },
  ApiOkResponseDoc: {
    description: 'Local excluído com sucesso',
    schema: {
      example: {
        message: 'Local excluído com sucesso!',
      },
    },
  },
};
