import {
  getNumberTypeErrorMessage,
  getRequiredFieldErrorMessage,
  getStringTypeErrorMessage,
} from 'src/utils/errorMessageGetterFunctions';

export const linkSensorsErrors = {
  availableSensorId: {
    notEmpty: { message: getRequiredFieldErrorMessage('availableSensorId') },
    notNumber: { message: getNumberTypeErrorMessage('AvailableSensorsEntity') },
  },
  name: {
    notEmpty: { message: getRequiredFieldErrorMessage('name') },
    notString: { message: getStringTypeErrorMessage('name') },
  },
  active: {
    notBoolean: { message: 'O campo "active" precisa ser um booleano.' },
  },
  macAddress: {
    notEmpty: { message: getRequiredFieldErrorMessage('macAddress') },
    notString: { message: getStringTypeErrorMessage('macAddress') },
    regex:
      'O Mac address deve seguir um desses dois formatos: 3D:F2:C9:A6:B3:4F ou 3D-F2-C9-A6-B3-4F',
  },
};
