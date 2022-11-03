import type { DefaultValues } from 'react-hook-form';

export type FormInputs = {
  number: string;
  holderName: string;
  expMonth: string;
  expYear: string;
  cvc: string;
};

export type F = keyof FormInputs;

export const initialValues: DefaultValues<FormInputs> = {
  number: '',
  holderName: '',
  expMonth: '',
  expYear: '',
  cvc: '',
};
