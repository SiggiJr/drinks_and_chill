import { useEffect, useState } from 'react';
import arrowImage from '../../../assets/img/arrow.png'
import styles from './Header.module.scss'
import Menu from '../Menu/Menu';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [cocktails, setCocktails] = useState([])
  const [searchInput, setSearchInput] = useState("")
  
  useEffect(() => {
    const searchTimeoutId = setTimeout(() => {
      if (searchInput === "") {
        setCocktails([])
      } else {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Fetch fehlgeschlagen")
          }
          return response.json()
        })
        .then(listData => setCocktails(listData))
      }
      }, 300)
    
    return () => {
      clearTimeout(searchTimeoutId)
    }
  }, [searchInput])
  
  const handleSearchInput = (event) => {
  setSearchInput(event.target.value)
  }

// if (cocktails !== "") {
//   return
// }


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
      <input type="text" name="serach" id="search" onChange={handleSearchInput} value={searchInput}/>
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