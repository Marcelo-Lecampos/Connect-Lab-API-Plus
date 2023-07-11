import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsDecimalWithFourDecimals(
  validationOptions?: ValidationOptions,
) {
  const regex = /^-?\d+\.\d{4}$/;
  return function (object: object, propertyName: string) {
    registerDecorator({
      propertyName: propertyName,
      target: object.constructor,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: any) {
          const stringValue = String(value);
          return typeof stringValue === 'string' && regex.test(stringValue);
        },
        defaultMessage(validationArguments?: ValidationArguments) {
          return `${validationArguments?.property} deve ser um número com 4 casas decimais, exemplo: 10.1234`;
        },
      },
    });
  };
}