import { Link } from "react-router-dom";

const IngredientItem = ({ingredient}) => {

  return ( 
    <Link to={`/list/${ingredient.toLowerCase()}`}>
    <h1>{ingredient}</h1>
    <p>IPSUM DOLOR SIT AMET</p>
    </Link>
  );
}

export default IngredientItem;