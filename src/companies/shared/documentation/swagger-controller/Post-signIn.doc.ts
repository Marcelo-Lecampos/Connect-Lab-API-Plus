export const signInDoc = {
  ApiOperationDoc: {
    summary: 'Faz o login da empresa no sistema',
    description: '🔑 Faz o login da empresa no sistema',
  },
  ApiResponse: {
    Unauthorized: {
      status: 401,
      description: 'Este e-mail não consta no nosso banco de dados!',
      schema: {
        example: {
          statusCode: 401,
          message: 'Este e-mail não consta no nosso banco de dados!',
          error: 'Unauthorized',
        },
      },
    },
    Success: {
      status: 200,
      description: 'Credenciais válidas, token gerado com sucesso!',
      schema: {
        example: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....',
        },
      },
    },
  },
};
