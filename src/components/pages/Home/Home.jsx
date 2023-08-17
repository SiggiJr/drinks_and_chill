import { useEffect } from "react";
import IngredientItem from "../../shared/IngredientItem/IngredientItem";

const Home = ({setSearchInput}) => {

  console.log(setSearchInput);

  useEffect(() => {
    setSearchInput("")
  }, [])
  const ingredients = ["Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall"]

  return ( 
    <section>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
  );
}

export default Home;