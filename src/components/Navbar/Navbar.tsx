import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';

function Navbar() {
  return (
      <div className={styles.navbar}>
        <a href="https://www.shift4.com/" target="_blank">
          <img src={logo} className={styles.navbar__logo} alt="Natur.ally logo"/>
        </a>
      </div>
  );
}

export default Navbar;