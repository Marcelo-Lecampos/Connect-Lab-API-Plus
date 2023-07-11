export const signUpDoc = {
  ApiOperationDoc: {
    summary: 'Faz o cadastro da empresa no sistema',
    description: '📝 Faz o cadastro da empresa no sistema',
  },
  ApiResponse: {
    Success: {
      status: 201,
      description: 'Faz o cadastro da empresa no sistema',
      schema: {
        example: {
          message: 'Empresa criada com sucesso!',
        },
      },
    },
    Conflict: {
      status: 409,
      description: 'Já existe uma empresa com esse e-mail!',
      schema: {
        example: {
          reason: 'Este e-mail já está cadastrado!',
        },
      },
    },
  },
};
