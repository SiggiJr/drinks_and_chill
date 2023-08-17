import { Link } from "react-router-dom";
import styles from "./IngredientItem.module.scss"

const IngredientItem = ({ingredient}) => {

  const path= ingredient === "Zufall" ? "/alldrinkslist/random" : `/list/${ingredient.toLowerCase()}`

  return ( 
    <div className={styles.div}>
    <Link className={styles.link} to={`${path}`}>
    <h1 className={styles.headline}>{ingredient}</h1>
    <p className={styles.lorem}>IPSUM DOLOR SIT AMET</p>
    </Link>
    </div>
  );
}

export default IngredientItem;