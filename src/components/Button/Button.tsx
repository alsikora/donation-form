import styles from './Button.module.css';

interface ButtonProps {
  title: string;
  theme: 'light' | 'dark';
}

const Button = ({title, theme = 'light'}: ButtonProps) => {
  const buttonType: string = `button--${theme}`
  return (
      <button className={`${styles.button} ${styles[buttonType]}`} type={'button'}>{title}</button>
  )
}

export default Button;