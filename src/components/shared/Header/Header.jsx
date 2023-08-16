import { useState } from 'react';
import arrowImage from '../../../assets/img/arrow.png'
import styles from './Header.module.scss'
import Menu from '../Menu/Menu';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
    <header className={styles.header}>
    <nav className={styles.navbar}>
    <p className="logo">DRINKS&CHILL</p>
    <p className={styles.menu_btn}
    onClick={() => setMenuOpen(prevMenu => !prevMenu)}>
      MENU
    </p>
    </nav>
    {menuOpen && <Menu/>}
    <article>
      <h1>Cocktails & Getränke!</h1>
      <p>Herzlich Willkommen in der Welt der Cocktails 
        und Getränke!</p>
    </article>
    <form className="search_form">
      <input type="text" name="serach" id="search" />
      <button type="submit" className="search_btn">Search</button>
    </form>
      <div className="arrow_wrapper">
        <div className="arrow">
          <img src={arrowImage} alt="" className={styles.image}/>
          <img src={arrowImage} alt="" className={styles.image}/>
          <img src={arrowImage} alt="" className={styles.image}/>
        </div>
      </div>
    </header>
  );
}

export default Header;