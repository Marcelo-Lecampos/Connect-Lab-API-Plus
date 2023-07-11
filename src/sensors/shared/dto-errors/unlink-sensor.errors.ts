export const unlikSensorError = {
  location_id: {
    isNumberLocation: { message: 'location_id deve ser um número!' },
    isNotEmptyLocation: { message: 'location_id não pode estar vazio!' },
  },
  sensor_id: {
    isNumberSensor: { message: 'sensor_id deve ser um número!' },
    isNotEmptySensor: { message: 'sensor_id não pode estar vazio!' },
  },
};
