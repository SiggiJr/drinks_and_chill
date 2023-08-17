import IngredientItem from "../../shared/IngredientItem/IngredientItem";
import AddYourDrink from "../AddYourDrink/AddYourDrink";

const Home = () => {

  const ingredients = ["Gin","Vodka","Rum","Scotch","Alkoholfrei","Zufall"]

  return ( 
    <>
    <AddYourDrink/>
    <section>
      {ingredients.map(ingredient => <IngredientItem key={ingredient} ingredient={ingredient}/>)}
    </section>
    </>
  );
}

export default Home;