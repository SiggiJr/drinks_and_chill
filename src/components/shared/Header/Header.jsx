import { useState } from 'react';
import arrowImage from '../../../assets/img/arrow.png'
import styles from './Header.module.scss'
import Menu from '../Menu/Menu';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
    <header className={styles.header}>
    <nav className={styles.navbar}>
    <p className={styles.logo}>DRINKS&CHILL</p>
    <p className={styles.menu_btn}
    onClick={() => setMenuOpen(prevMenu => !prevMenu)}>
      MENU
    </p>
    </nav>
    {menuOpen && <Menu/>}
    <article className={styles.article}>
      <h1>Cocktails & Getränke!</h1>
      <p className={styles.p_text}>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS 
        UND GETRÄNKE!</p>
    </article>
    <form className={styles.search_form}>
      <input className={styles.input} type="text" name="serach" id="search" placeholder="type something"/>
      <button type="submit" className={styles.search_btn}>Search</button>
    </form>
      <div className={styles.arrow_wrapper}>
        <div className="arrow">
          <img src={arrowImage} alt="arrow icon" className={styles.image}/>
          <img src={arrowImage} alt="arrow icon" className={styles.image}/>
          <img src={arrowImage} alt="arrow icon" className={styles.image}/>
        </div>
      </div>
    </header>
  );
}

export default Header;