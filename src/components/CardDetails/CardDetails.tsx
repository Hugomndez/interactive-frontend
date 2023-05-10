import Image from 'next/image';
import { useWatch } from 'react-hook-form';
import styles from './CardDetails.module.css';
import { cardBackImg } from './cardBackImg';
import { cardFrontImg } from './cardFrontImg';

const CardDetails = () => {
  return (
    <div className={styles.container}>
      <CardFront />
      <CardBack />
    </div>
  );
};

export default CardDetails;

const CardFront = () => {
  return (
    <div className={styles.cardFront}>
      <Image
        src={cardFrontImg}
        width={286}
        height={157}
        alt=''
      />
      <svg
        className={styles.logo}
        width='84'
        height='47'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <ellipse
          cx='23.478'
          cy='23.5'
          rx='23.478'
          ry='23.5'
          fill='#fff'
        />
        <path
          d='M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z'
          stroke='#fff'
        />
      </svg>
      <Number />
      <HolderName />
      <ExpDate />
    </div>
  );
};

const CardBack = () => {
  return (
    <div className={styles.cardBack}>
      <Image
        src={cardBackImg}
        width={286}
        height={157}
        alt=''
      />
      <CVC />
    </div>
  );
};

const Number = () => {
  const n = useWatch({ name: 'number' });

  const number = n || '0000 0000 0000 0000';

  return <code className={styles.number}>{number}</code>;
};

const HolderName = () => {
  const h = useWatch({ name: 'holderName' });

  const holderName = h || 'jane appleseed';

  return <p className={styles.holderName}>{holderName}</p>;
};

const ExpDate = () => {
  const m = useWatch({ name: 'expMonth' });
  const y = useWatch({ name: 'expYear' });

  const expMonth = m || '00';
  const expYear = y || '00';

  return <p className={styles.expirationDate}>{`${expMonth}/${expYear}`}</p>;
};

const CVC = () => {
  const c = useWatch({ name: 'cvc' });

  const cvc = c || '000';

  return <p className={styles.cvc}>{cvc}</p>;
};
