import { FormProvider, useForm } from 'react-hook-form';
import type { FormInputs } from '../../types/formTypes';
import { initialValues } from '../../types/formTypes';
import { Attribution } from '../Attribution';
import { CardDetails } from '../CardDetails';
import { CardForm } from '../CardForm';
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
