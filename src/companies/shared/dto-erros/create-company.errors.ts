export const createCompanyErros = {
  company: {
    emptyCompany: {
      message: 'O nome da empresa é obrigatório!',
    },
    stringCompany: {
      message: 'O nome da empresa deve ser uma string!',
    },
  },
  cnpj: {
    emptyCnpj: {
      message: 'O cnpj é obrigatório!',
    },
    stringCnpj: {
      message: 'O cnpj deve ser uma string!',
    },
    Matches: {
      message: 'O cnpj deve seguir este modelo: XX.XXX.XXX/XXXX-XX',
    },
  },
  responsible: {
    emptyResponsible: {
      message: 'O nome do responsável é obrigatório!',
    },
    stringResponsible: {
      message: 'O nome do responsável deve ser uma string!',
    },
  },
  email: {
    emptyEmail: {
      message: 'O e-mail é obrigatório!',
    },
    stringEmail: {
      message: 'O e-mail deve ser uma string!',
    },
    IsEmail: {
      message: 'O e-mail informado não é válido!',
    },
  },
  phone: {
    emptyPhone: {
      message: 'O telefone é obrigatório!',
    },
    stringPhone: {
      message: 'O telefone deve ser uma string!',
    },
    Matches: {
      message: 'O telefone deve seguir este modelo: (XX) XXXXX-XXXX',
    },
  },
  password: {
    emptyPassword: {
      message: 'A senha é obrigatória!',
    },
    stringPassword: {
      message: 'A senha deve ser uma string!',
    },
    MinLenght: {
      message: 'A senha deve ter no mínimo 8 caracteres!',
    },
  },
  confirmPassword: {
    emptyConfirmPassword: {
      message: 'A confirmação da senha é obrigatória!',
    },
    stringConfirmPassword: {
      message: 'A confirmação da senha deve ser uma string!',
    },
    MinLenght: {
      message: 'A confirmação da senha deve ter no mínimo 8 caracteres!',
    },
    Match: {
      message: 'As senhas não estão iguais, revise-as!',
    },
  },
};
