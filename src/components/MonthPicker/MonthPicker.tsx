import { useEffect, useState } from 'react';
import styles from './MonthPicker.module.css';
import { TODAY } from '../../utils/constants.ts';
import { monthDate } from '../../utils/utils.ts';

interface MonthPickerProps {
  onChange: (date: Date) => void;
}

function MonthPicker({onChange}: MonthPickerProps) {
  const [selectedMonth, setSelectedMonth] = useState<number>(TODAY.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(TODAY.getFullYear());
  const [finalDate, setFinalDate] = useState<Date>();
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);

  useEffect((): void => {
    const date: Date = new Date(selectedYear, selectedMonth);
    onChange(date);
    setFinalDate(date)
  }, [selectedYear, selectedMonth]);

  useEffect((): void => {
    finalDate && setPrevDisabled(TODAY >= finalDate);
  }, [finalDate]);

  const prev = (): void => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((year: number) => year - 1);
    } else {
      setSelectedMonth((month: number) => month - 1);
    }
  }

  const next = (): void => {
    if (selectedMonth === 11) {
      setSelectedMonth(1);
      setSelectedYear((year: number) => year + 1);
    } else {
      setSelectedMonth((month: number) => month + 1);
    }
  }

  return (
      <div className={styles.picker}>
        <button type={'button'} onClick={prev} className={styles.picker__navigation} disabled={prevDisabled} aria-label="previous">
          <span className={`${styles.icon} ${styles['icon--previous']}`}/>
        </button>
        <div className={styles.picker__date}>
          <div className={styles.picker__month}>{monthDate.format(finalDate)}</div>
          <div className={styles.picker__year}>{selectedYear}</div>
        </div>
        <button type={'button'} onClick={next} className={styles.picker__navigation} aria-label="next">
          <span className={`${styles.icon} ${styles['icon--next']}`}/>
        </button>
      </div>
  )
}

export default MonthPicker;