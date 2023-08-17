import IngredientItem from "../../shared/IngredientItem/IngredientItem";
import styles from "./Home.module.scss";

const Home = () => {

  const ingredients = ["Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall"]

  return ( 
    <section className={styles.section}>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
  );
}

export default Home;