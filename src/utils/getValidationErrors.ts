import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export function getValidationErrors(errs: ValidationError): IErrors {
  const errors: IErrors = {};

  errs.inner.forEach(err => {
    errors[err.path || ''] = err.message;
  });

  return errors;
}
