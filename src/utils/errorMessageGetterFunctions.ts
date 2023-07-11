export const getStringTypeErrorMessage = (fieldName: string) =>
  `O campo "${fieldName}" precisa ser uma string.`;

export const getNumberTypeErrorMessage = (fieldName: string) =>
  `O campo "${fieldName}" precisa ser um número.`;

export const getRequiredFieldErrorMessage = (fieldName: string) =>
  `O campo "${fieldName}" é obrigatório.`;
