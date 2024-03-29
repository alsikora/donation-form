import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.tsx';
import Card from './components/Card/Card.tsx';

function App() {

  return (
      <>
        <header>
          <Navbar/>
        </header>
        <main className={styles.main}>
          <Card/>
        </main>
      </>
  )
}

export default App
