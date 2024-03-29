import styles from './Card.module.css';
import Button from '../Button/Button.tsx';

function Card() {
  return (
      <div className={styles.card}>
        <div>The giving block</div>
        <div>Form</div>
        <div>
          <Button title={'Cancel'} theme={'light'}/>
          <Button title={'Continue'} theme={'dark'}/>
        </div>
      </div>
  );
}

export default Card;