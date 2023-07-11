export const FindIdSensorDoc = {
  ApiOperationDoc: {
    summary: 'Trás diversas informações de uma location',
    description: '🔍  Trás diversas informações de uma location',
  },
  ApiOkResponse: {
    description: 'Localidade atualizada com sucesso',
    schema: {
      example: {
        "location_id": 5,
        "fieldName": "Berlin",
        "latitude": "-27.5969",
        "longitude": "-48.5495",
        "sensorCount": 2,
        "sensor": [
          {
            "sensor_id": 3,
            "name": "Meu sensor de temperatura",
            "createdAt": "2023-04-12",
            "macAddress": "3D-F2-C9-A6-B3-4D",
            "active": true,
            "measurements": [
              {
                "measurement_id": 2,
                "createdAt": "2023-04-12",
                "measurement": 21
              }
            ],
            "availableSensor": {
              "available_sensor_id": 1,
              "name": "Sensor de Umidade do Solo 1",
              "type": "umidade_do_solo",
              "minRange": 0,
              "maxRange": 100,
              "barcode": "123456789",
              "batch": "ABC123"
            }
          },
      
        ],
      },
    },
  },
    ApiBadRequestResponseDoc: {
      description: 'Erro ao atualizar localidade',
      schema: {
        example: {
          "response": {
            "message": "Não há locais cadastrados"
          },
          "status": 404,
          "message": "Não há locais cadastrados",
          "name": "HttpException"
        }
      },
    }
  }