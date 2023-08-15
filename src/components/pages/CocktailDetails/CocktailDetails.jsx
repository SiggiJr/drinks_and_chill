import { useEffect, useState } from "react";

const CocktailDetails = () => {

    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {

        
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Fetch went wrong")
            }
            return response.json()
        })
        .then((cocktailData) => setCocktail(cocktailData.drinks))
        .catch((error) => console.log(error.message));
    }, [])
        console.log(cocktail);

    return ( 
        <div>
            <h1>CocktailDetails</h1>
            {cocktail.map((drinks) => (
                <div key={drinks.idDrink}>
                    <h1>{drinks.strDrink}</h1>
                    <img src={drinks.strDrinkThumb} alt="Cocktail Preview Picture" />
                    <div>
                        <h2>Zutaten</h2>
                        <span>
                        {drinks.strIngredient1}
                        {drinks.strMeasure1}
                        </span>
                        <span>
                        {drinks.strIngredient2}
                        {drinks.strMeasure2}
                        </span>
                        <span>
                            // strIngredient1 ? value : 
                        {drinks.strIngredient3}
                        {drinks.strMeasure3}
                        </span>
                    </div>
                    <div>
                        {drinks.strInstructions}
                    </div>

                </div>
            ))}
        </div>
    )
}
 
export default CocktailDetails;
