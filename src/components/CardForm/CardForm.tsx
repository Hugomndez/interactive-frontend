import type { ChangeEvent } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import type { F, FormInputs } from '../../types/formTypes';
import styles from './CardForm.module.css';

const CardForm = () => {
  const { register, handleSubmit, reset, setValue, formState } =
    useFormContext<FormInputs>();

  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const onSubmit: SubmitHandler<FormInputs> = data => console.log('Successful');

  const formatValue = (e: ChangeEvent<HTMLInputElement>, InputName: F) => {
    const limit = {
      number: 16,
      holderName: 0,
      expMonth: 2,
      expYear: 2,
      cvc: 3,
    }[InputName];

    let formattedValue = e.currentTarget.value
      .replace(/ /g, '')
      .replace(/\D/g, '');

    if (formattedValue.length > limit) {
      formattedValue = formattedValue.slice(0, limit);
    }

    if (InputName === 'number') {
      formattedValue = formattedValue.match(/.{1,4}/g)?.join(' ')!;
    }

    setValue(InputName, formattedValue);
  };

  const isValidYear = (value: string) => {
    const currentYear = new Date().getFullYear().toString().slice(2, 4);

    const isValid = value >= currentYear ? true : false;

    return isValid;
  };

  return isSubmitSuccessful ? (
    <div className={styles.onSubmitSuccessful}>
      <svg
        width='80'
        height='80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='40' cy='40' r='40' fill='url(#a)' />
        <path d='M28 39.92 36.08 48l16-16' stroke='#fff' strokeWidth='3' />
        <defs>
          <linearGradient
            id='a'
            x1='-23.014'
            y1='11.507'
            x2='0'
            y2='91.507'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#6348FE' />
            <stop offset='1' stopColor='#610595' />
          </linearGradient>
        </defs>
      </svg>
      <h1>Thank you!</h1>
      <p>We’ve added your card details</p>
      <button type='button' onClick={() => reset()}>
        Continue
      </button>
    </div>
  ) : (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        cardholder name
        <input
          placeholder='e.g. Jane Appleseed'
          maxLength={29}
          {...register('holderName', {
            required: "Can't be blank",
            pattern: {
              value: /^[A-Za-z\s]*$/,
              message: 'Wrong format, letters only',
            },
          })}
        />
        {errors.holderName && (
          <span className={styles.invalid}>{errors.holderName.message}</span>
        )}
      </label>
      <label>
        card number
        <input
          type='tel'
          placeholder='e.g. 1234 5678 9123 0000'
          {...register('number', {
            required: "Can't be blank",
            minLength: { value: 16, message: 'Must be 16-Digits' },
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              formatValue(e, 'number');
            },
          })}
        />
        {errors.number && (
          <span className={styles.invalid}>{errors.number.message}</span>
        )}
      </label>
      <div className={styles.formFieldset}>
        <fieldset>
          <legend>exp. date (mm/yy)</legend>
          <label>
            <input
              className={
                errors.expMonth
                  ? `${styles.date} ${styles.invalid}`
                  : styles.date
              }
              type='tel'
              placeholder='MM'
              {...register('expMonth', {
                required: "Can't be blank",
                pattern: {
                  value: /0[1-9]|1[0-2]/,
                  message: 'Invalid month',
                },
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  formatValue(e, 'expMonth');
                },
              })}
            />
          </label>
          <label>
            <input
              className={
                errors.expYear
                  ? `${styles.date} ${styles.invalid}`
                  : styles.date
              }
              type='tel'
              placeholder='YY'
              {...register('expYear', {
                required: "Can't be blank",
                validate: v => isValidYear(v) || 'Invalid year',
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  formatValue(e, 'expYear');
                },
              })}
            />
          </label>
        </fieldset>
        <label>
          cvc
          <input
            className={
              errors.cvc
                ? `${styles.inputCvc} ${styles.invalid}`
                : styles.inputCvc
            }
            type='tel'
            placeholder='e.g. 123'
            {...register('cvc', {
              required: "Can't be blank",
              pattern: {
                value: /[0-9][0-9][0-9]/,
                message: 'Must be 3-digits',
              },
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                formatValue(e, 'cvc');
              },
            })}
          />
        </label>
      </div>
      {errors.expMonth ? (
        <span className={styles.invalid}>{errors.expMonth.message}</span>
      ) : errors.expYear ? (
        <span className={styles.invalid}>{errors.expYear.message}</span>
      ) : errors.cvc ? (
        <span className={styles.invalid}>{errors.cvc.message}</span>
      ) : null}
      <input type='submit' value='Confirm' disabled={!isDirty || !isValid} />
    </form>
  );
};

export default CardForm;
