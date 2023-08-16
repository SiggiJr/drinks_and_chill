import { Link } from "react-router-dom";

const IngredientItem = ({ingredient}) => {

  const path= ingredient === "Zufall" ? "/alldrinkslist/random" : `/list/${ingredient.toLowerCase()}`

  return ( 
    <Link to={`${path}`}>
    <h1>{ingredient}</h1>
    <p>IPSUM DOLOR SIT AMET</p>
    </Link>
  );
}

export default IngredientItem;