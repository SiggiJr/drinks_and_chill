import { useEffect } from "react";
import IngredientItem from "../../shared/IngredientItem/IngredientItem";
import AddYourDrink from "../AddYourDrink/AddYourDrink";
import styles from "./Home.module.scss";

const Home = ({setSearchInput}) => {

  console.log(setSearchInput);

  useEffect(() => {
    setSearchInput("")
  }, [])
  const ingredients = ["Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall"]

  return ( 
    <>
    <AddYourDrink/>
    <section className={styles.section}>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
    </>
  );
}

export default Home;