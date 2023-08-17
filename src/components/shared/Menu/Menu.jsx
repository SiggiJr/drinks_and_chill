import { Link } from "react-router-dom";
import styles from './Menu.module.scss'

const Menu = () => {
  
  return ( 
    <ul>
      <li className={styles.list_item}>
    <Link to={"/"} className={styles.link}>Home</Link>
      </li>
      <li className={styles.list_item}>
    <Link to={"/list/alkoholisch"} className={styles.link}>alkoholische Getränke</Link>
      </li>
      <li className={styles.list_item}>
    <Link to={"/list/alkoholfrei"} className={styles.link}>nicht alkoholische Getränke</Link>
      </li>
    </ul>
  );
}

export default Menu;