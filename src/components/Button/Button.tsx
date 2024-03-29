import styles from './Button.module.css';

interface ButtonProps {
  title: string;
  theme: 'light' | 'dark';
}

const Button = ({title, theme = 'light'}: ButtonProps) => {
  return (
      <button className={`${styles.button} ${styles[theme]}`} type={'button'}>{title}</button>
  )
}

export default Button;