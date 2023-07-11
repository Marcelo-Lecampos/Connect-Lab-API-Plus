export const checkPassApiProperty = {
    email: {
        name: 'email',
        description: 'E-mail da empresa',
        example: 'emailteste@gmail.com',
        type: String,
        required: true,
    },
    oldPassword: {
        name: 'oldPassword',
        description: 'Password atual para login da empresa',
        example: '12345678',
    },
    newPassword: {
        name: 'newPassword',
        description: 'Password novo para login da empresa',
        example: '123456789',
    },
    newPasswordConfirm: {
        name: 'newPasswordConfirm',
        description: 'Confirmação do Password novo para login da empresa',
        example: '123456789',
    },
}