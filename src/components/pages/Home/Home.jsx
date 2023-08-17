import { useEffect } from "react";
import IngredientItem from "../../shared/IngredientItem/IngredientItem";
import Footer from "../../shared/Footer/Footer"
import styles from "./Home.module.scss";
import { useOutletContext } from "react-router-dom";

const Home = () => {

  // const [showSearch ,setShowSearch] = useOutletContext();

  // setShowSearch(true)

  const ingredients = ["Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall"]

  return ( 
    <>
    <section className={styles.section}>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
    <Footer/>
    </>
  );
}

export default Home;