'use client';
import { Attribution } from '@/components/Attribution';
import { CardDetails } from '@/components/CardDetails';
import { CardForm } from '@/components/CardForm';
import type { FormInputs } from '@/types';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './CardLayout.module.css';

const initialValues = {
  number: '',
  holderName: '',
  expMonth: '',
  expYear: '',
  cvc: '',
} as const satisfies FormInputs;

const CardLayout = () => {
  const methods = useForm<FormInputs>({
    mode: 'onChange',
    delayError: 800,
    defaultValues: initialValues,
  });

  return (
    <FormProvider {...methods}>
      <section className={styles.layout}>
        <div className={styles.background}>
          <CardDetails />
        </div>
        <div className={styles.content}>
          <CardForm />
          <Attribution />
        </div>
      </section>
    </FormProvider>
  );
};

export default CardLayout;
