export const createLocationErros = {
  fieldName: {
    emptyName: {
      message: 'O fieldName não pode estar vazio',
    },
    stringName: {
      message: 'O fieldName deve ser uma string',
    },
  },
  latitude: {
    emptyLatitude: {
      message: 'A latitude não pode estar vazia',
    },
    numberLatitude: {
      message: 'A latitude deve ser um number',
    },
  },
  longitude: {
    emptyLongitude: {
      message: 'A longitude não pode estar vazia',
    },
    numberLongitude: {
      message: 'A longitude deve ser um number',
    },
  },
};
