import {
  getNumberTypeErrorMessage,
  getRequiredFieldErrorMessage,
} from 'src/utils/errorMessageGetterFunctions';

export const registerMeasurementErrors = {
  sensor_id: {
    notEmpty: { message: getRequiredFieldErrorMessage('sensor_id') },
    notNumber: { message: getNumberTypeErrorMessage('sensor_id') },
  },
  measurement: {
    notEmpty: { message: getRequiredFieldErrorMessage('measurement') },
    notNumber: { message: getNumberTypeErrorMessage('measurement') },
  },
};
