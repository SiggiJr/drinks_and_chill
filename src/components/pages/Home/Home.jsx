import { useEffect } from "react";
import IngredientItem from "../../shared/IngredientItem/IngredientItem";
import AddYourDrink from "../AddYourDrink/AddYourDrink";
import Footer from "../../shared/Footer/Footer"
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
    <Footer/>
    </>
  );
}

export default Home;