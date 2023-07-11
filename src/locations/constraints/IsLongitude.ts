import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsLongitude(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isLongitude',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value >= -180 && value <= 180;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} deve ser um number estar entre (-180 to 180 degrees).`;
        },
      },
    });
  };
}
