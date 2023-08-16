import { useEffect, useState } from "react";
import { getIngredients } from "../../../utils/Functions/getData";
import IngredientItem from "../../shared/IngredientItem/IngredientItem";

const Home = () => {

  const ingredients = ["Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall"]

  return ( 
    <section>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
  );
}

export default Home;