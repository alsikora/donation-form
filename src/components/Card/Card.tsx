import styles from './Card.module.css';
import Button from '../Button/Button.tsx';

function Card() {
  return (
      <div className={styles.card}>
        <div className={styles.card__header}>
          <span className={styles.icon}/>
          <div>
            <h1 className={styles.card__title}>The giving block</h1>
            <h3 className={styles.card__subtitle}>Set up your donation goal!</h3>
          </div>
        </div>
        <div className={styles.card__content}>
          <div>
            <div className={styles.content__total}>
              <span className={styles.content__label}>Total amount</span>
              <span className={styles.content__amount}>$200000</span>
            </div>
            <p className={styles.content__summary}>You will be sending <strong>$25,000</strong> every month, until <strong>August
              2023</strong>. Thank you!</p>
          </div>
          <div className={styles.card__actions}>
            <Button title={'Cancel'} theme={'light'}/>
            <Button title={'Continue'} theme={'dark'}/>
          </div>
        </div>
      </div>
  );
}

export default Card;