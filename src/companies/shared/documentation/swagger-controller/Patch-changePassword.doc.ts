export const ChangePasswordDoc = {
    ApiOperationDoc: {
      summary:
        'Troca password do usuário',
      description:
        '🔐 Essa rota é responsável por trocar a password do usuário.',
    },
    ApiResponse: {
      Success: {
        status: 200,
        description:
          'Password trocada com sucesso!',
        schema: {
          example: { message: "Senha atualizada"},
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
      BadRequest: {
        status: 400,
        description:
          'Algo errado ocorreu, entre em contato com o suporte',
        schema: {
          example: {
            "error": {
              "message": "Contate o suporte, erro desconhecido",
            }
          },
        },
      },
      UNAUTHORIZED: {
        status: 401,
        description:
          'O e-mail informado não está cadastrado. Por favor, verifique o e-mail digitado e tente novamente.',
        schema: {
          example: {
            "error": {
              "message": "Senha atual incorreta",
              "code": 401
            }
          },
        },
      },

    }, // Fim ApiResponse
  };
