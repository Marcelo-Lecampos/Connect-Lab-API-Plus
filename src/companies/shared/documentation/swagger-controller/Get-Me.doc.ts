export const meDoc = {
    ApiOperationDoc: {
      summary: 'Trás os dados da empresa logada',
      description: '🎁 Trás os dados da empresa logada',
    },
    ApiResponse: {
      Unauthorized: {
        status: 401,
        description: 'Necessário token para acessar a rota!',
        schema: {
          example: {
            statusCode: 401,
            message: 'Necessário token para acessar a rota!',
            error: 'Unauthorized',
          },
        },
      },
      Success: {
        status: 200,
        description: 'Dados da empresa logada',
        schema: {
          example: {
            "company_id": 1,
            "company": "string",
            "cnpj": "11.111.111/1111-11",
            "responsible": "Marcelo",
            "email": "string@gmail.com",
            "phone": "(11) 11111-1111"
          },
        },
      },
    },
  };
  