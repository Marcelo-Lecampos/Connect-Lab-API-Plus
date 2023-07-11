export const forgotPasswordDoc = {
  ApiOperationDoc: {
    summary:
      'Verifica se o e-mail informado está no nosso sistema e encaminha o usuário para o formulário de troca de senha',
    description:
      '🔍 Verifica se o e-mail informado está no nosso sistema e encaminha o usuário para o formulário de troca de senha',
  },
  ApiResponse: {
    Success: {
      status: 200,
      description:
        'E-mail encontrado, redirecionando você para o formulário de alterar a senha!',
      schema: {
        example: {
          code: 200,
          message:
            'E-mail encontrado, redirecionando você para o formulário de alterar a senha!',
        },
      },
    },
    NotFound: {
      status: 404,
      description:
        'O e-mail informado não está cadastrado. Por favor, verifique o e-mail digitado e tente novamente.',
      schema: {
        example: {
          statusCode: 404,
          message:
            'O e-mail informado não está cadastrado. Por favor, verifique o e-mail digitado e tente novamente.',
          error: 'Not Found',
        },
      },
    },
  },
};
