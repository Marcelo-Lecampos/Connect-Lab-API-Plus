export const newPasswordErros = {
    email: {
      emptyEmail: {
        message: 'O e-mail é obrigatório!',
      },
      IsEmail: {
        message: 'O e-mail informado não é válido!',
      },
    },
    oldPassword: {
      emptyPassword: {
        message: 'O oldPassword  é obrigatório!',
      },
      stringPassword: {
        message: 'O oldPassword deve ser uma string!',
      },
      MinLenght: {
        message: 'O oldPassword deve ter no mínimo 8 caracteres!',
      },
      
    },
    newPassword: {
      emptyPassword: {
          message: 'O newPassword é obrigatório!',
          },
          stringPassword: {
          message: 'O newPassword deve ser uma string!',
          },
          MinLenght: {
          message: 'O newPassword deve ter no mínimo 8 caracteres!',
          },
           },

    newPasswordConfirm: {
        emptyPassword: {
            message: 'newPasswordConfirm é obrigatória!',
            },
            stringPassword: {
            message: 'newPasswordConfirm deve ser uma string!',
            },
            MinLenght: {
            message: 'newPasswordConfirm deve ter no mínimo 8 caracteres!',
            },
            Match: {
                message: 'As senhas não conferem.',
            }

    }
  };