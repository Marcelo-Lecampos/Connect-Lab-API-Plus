export const CreateDoc = {
  ApiOperationDoc: {
    summary: 'Cria uma nova location',
    description: '✨ Cria uma nova location',
  },
  ApiCreatedResponseDoc: {
    description: 'Location criada com sucesso',
    schema: {
      example: {
        location_id: 40,
        fieldName: 'Florianópolis',
        latitude: -27.5969,
        longitude: -48.5495,
        company: 1,
      },
    },
  },
  ApiBadRequestResponseDoc: {
    description: 'Já existe um registro com esse nome',
    schema: {
      example: {
        statusCode: 400,
        message: 'Já existe um registro com esse nome',
      },
    },
  },
};
