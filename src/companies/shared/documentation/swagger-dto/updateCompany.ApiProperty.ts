export const updateCompanyApiProperty = {
    phone: {
        name: 'phone',
        description: 'Telefone da empresa',
        example: '(47) 99838-2313',
        type: String,
        required: false,
    },
    password: {
        name: 'password',
        description: 'Senha para login da empresa',
        example: '12345678',
        type: String,
        required: false,
    },
    confirmPassword: {
        name: 'confirmPassword',
        description: 'Confirmação da senha para login da empresa',
        example: '12345678',
        type: String,
        required: false,
    },
};