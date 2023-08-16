import { useEffect, useState } from "react";
import { getIngredients } from "../../../utils/Functions/getData";
import IngredientItem from "../../shared/IngredientItem/IngredientItem";

const Home = () => {

  // const [ingredients, setIngredients] = useState([])

  const ingredients = [
    "Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall",
  ]

  // useEffect(() => {
  //   getIngredients()
  //   .then((ingredientsData) => setIngredients(ingredientsData));
  //   setIngredients(getIngredients)
  // }, [])

  return ( 
    <section>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
  );
}

export default Home;