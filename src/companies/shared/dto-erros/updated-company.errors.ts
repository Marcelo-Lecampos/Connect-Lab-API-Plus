export const UpdateCompanyErrors = {
  telephone: {
    stringPhone: {
      message: 'O telefone deve ser uma string!',
    },
    matchesPhone: {
      message: 'O telefone deve seguir este modelo: (XX) XXXXX-XXXX',
    },
  },
  password: {
    stringPassword: {
      message: 'A senha deve ser uma string!',
    },
    minLengthPassword: {
      message: 'A senha deve ter no mínimo 8 caracteres!',
    },
  },
  confirmPassword: {
    matchConfirmPassword: {
      message:
        'A confirmação da senha deve ser igual a senha, revise os campos!',
    },
  },
};
