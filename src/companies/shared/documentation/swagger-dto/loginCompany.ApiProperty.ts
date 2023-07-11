export const loginCompanyApiProperty = {
    email: {
        name: 'email',
        description: 'E-mail da empresa',
        example: 'emailteste@gmail.com',
        type: String,
        required: true,
    },
    password: {
        name: 'password',
        description: 'Senha para login da empresa',
        example: '12345678',
        type: String,
        required: true,
    },
}