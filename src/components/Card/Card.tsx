import { USDollar, dateDifferenceInMonths, monthYearDate, parseAmountToNumber } from '../../utils/utils.ts';
import { TODAY } from '../../utils/constants.ts';
import Button from '../Button/Button.tsx';
import MonthPicker from '../MonthPicker/MonthPicker.tsx';
import styles from './Card.module.css';
import { ChangeEvent, useCallback, useState } from 'react';

function Card() {
  const [monthNum, setMonthNum] = useState<number>(0)
  const [finalDate, setFinalDate] = useState<Date>();
  const [amount, setAmount] = useState<string>('');

  const handleDateChange = useCallback((date: Date): void => {
    setMonthNum(dateDifferenceInMonths(TODAY, date));
    setFinalDate(date);
  }, []);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value: number = parseAmountToNumber(e.target.value);
    setAmount(USDollar.format(value))
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
              <div className={styles.donation}>
                <div className={styles.donation__donate}>
                  <span className={styles["icon--dollar"]}/>
                  <label htmlFor="donate" className={styles.donation__label}>I can donate</label>
                  <input className={styles.donation__amount}
                         value={amount}
                         onChange={handleAmountChange}
                         name="donate" id="donate"
                         placeholder={'0.00'}/>
                </div>
                <div className={styles.donation__month}>
                  <label className={styles.donation__label}>Every month until</label>
                  <MonthPicker onChange={handleDateChange}/>
                </div>
              </div>
              <div className={styles.content__total}>
                <span className={styles.content__label}>Total amount</span>
                <span className={styles.content__amount}>
                  ${USDollar.format(parseAmountToNumber(amount) * monthNum)}
                </span>
              </div>
              <p className={styles.content__summary}>You will be
                sending <strong>${USDollar.format(parseAmountToNumber(amount))}</strong> every month,
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