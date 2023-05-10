import { Attribution, CardDetails, CardForm } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { initialValues, type FormInputs } from 'types/formTypes';
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
