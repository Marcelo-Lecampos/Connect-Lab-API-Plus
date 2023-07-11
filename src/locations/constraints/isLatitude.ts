import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsLatitude(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isLatitude',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value >= -90 && value <= 90;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} deve ser um number entre (-90 to 90 degrees).`;
        },
      },
    });
  };
}
