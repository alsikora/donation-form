import { USDollar, dateDifferenceInMonths, monthYearDate } from '../../utils/utils.ts';
import { TODAY } from '../../utils/constants.ts';
import Button from '../Button/Button.tsx';
import MonthPicker from '../MonthPicker/MonthPicker.tsx';
import styles from './Card.module.css';
import { useState } from 'react';

function Card() {
  const [monthNum, setMonthNum] = useState<number>(0)
  const [finalDate, setFinalDate] = useState<Date>();
  const price = 25000;

  const handleDateChange = (date: Date): void => {
    setMonthNum(dateDifferenceInMonths(TODAY, date));
    setFinalDate(date);
    console.log('card')
  }

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
          <form>
            <div>
              <div>
                <div>
                  <MonthPicker onChange={handleDateChange}/>
                </div>
              </div>
              <div className={styles.content__total}>
                <span className={styles.content__label}>Total amount</span>
                <span className={styles.content__amount}>${USDollar.format(price * monthNum)}</span>
              </div>
              <p className={styles.content__summary}>You will be
                sending <strong>${USDollar.format(price)}</strong> every month,
                until <strong>{monthYearDate.format(finalDate)}</strong>. Thank you!</p>
            </div>
            <div className={styles.card__actions}>
              <Button title={'Cancel'} theme={'light'}/>
              <Button title={'Continue'} theme={'dark'}/>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Card;