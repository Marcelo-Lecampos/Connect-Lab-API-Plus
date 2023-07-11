export const sharedResponses = {
  Unauthorized: {
    status: 401,
    description: 'Necessário token para acessar a rota!',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  },
};
