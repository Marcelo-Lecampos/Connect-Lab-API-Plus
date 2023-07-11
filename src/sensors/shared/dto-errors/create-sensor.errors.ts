import {
  getNumberTypeErrorMessage,
  getRequiredFieldErrorMessage,
  getStringTypeErrorMessage,
} from 'src/utils/errorMessageGetterFunctions';

export const createSensorErrors = {
  name: {
    notString: { message: getStringTypeErrorMessage('name') },
    isEmpty: { message: getRequiredFieldErrorMessage('name') },
  },
  type: {
    notString: { message: getStringTypeErrorMessage('type') },
    isEmpty: { message: getRequiredFieldErrorMessage('type') },
  },
  barcode: {
    notString: { message: getStringTypeErrorMessage('barcode') },
    isEmpty: { message: getRequiredFieldErrorMessage('barcode') },
  },
  batch: {
    notString: { message: getStringTypeErrorMessage('batch') },
    isEmpty: { message: getRequiredFieldErrorMessage('batch') },
  },
  minRange: {
    notNumber: { message: getNumberTypeErrorMessage('minRange') },
    isEmpty: { message: getRequiredFieldErrorMessage('minRange') },
  },
  maxRange: {
    notNumber: { message: getNumberTypeErrorMessage('maxRange') },
    isEmpty: { message: getRequiredFieldErrorMessage('maxRange') },
  },
};
