export const linkSensorApiProperty = {
  availableSensorId: {
    name: 'availableSensorId',
    description: 'Nome id do sensor disponível para vinculação',
    example: 1,
    type: Number,
    required: true,
  },
  name: {
    name: 'name',
    description: 'Nome que o sensor vinculado vai ter',
    example: 'Meu sensor de temperatura',
    type: String,
    required: true,
  },
  active: {
    name: 'active',
    description: 'Se o sensor vinculado está ligado ou desligado',
    example: true,
    type: Boolean,
    required: false,
  },
  macAddress: {
    name: 'macAddress',
    description: 'Mac address do sensor que será vinculado',
    example: '3D-F2-C9-A6-B3-4F',
    type: String,
    required: true,
  },
};
