import { Link } from "react-router-dom";
import styles from './Menu.module.scss'

const Menu = () => {
  return ( 
    <>
    <Link to={"/"} className={styles.link}>Home</Link>
    </>
  );
}

export default Menu;