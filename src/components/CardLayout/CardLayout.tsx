'use client';
import { Attribution } from '@/components/Attribution';
import { CardDetails } from '@/components/CardDetails';
import { CardForm } from '@/components/CardForm';
import { initialValues, type FormInputs } from '@/types';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './CardLayout.module.css';

const CardLayout = () => {
  const methods = useForm<FormInputs>({
    delayError: 800,
    mode: 'onChange',
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
