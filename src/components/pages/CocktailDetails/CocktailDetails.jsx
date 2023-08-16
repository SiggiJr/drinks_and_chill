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
        .then((cocktailData) => setCocktail(cocktailData.drinks[0]))
        .catch((error) => console.log(error.message));
    }, [])
        console.log(cocktail);

            let newIngredientArray = [];
            let newMeasureArray = [];
            
            

                for (const [key, value] of Object.entries(cocktail)) 
                
                {
                    if (key.includes("strIngredient") && value) {



                        const ingredientObject = {
                            id: key.slice(-1),
                            ingredient:value
                        };
                        
                        

                        newIngredientArray = [...newIngredientArray, ingredientObject]


                        // newIngredientArray = [...newIngredientArray, value]
                    }

                    if (key.includes("strMeasure") && value) {
                        newIngredientArray.map(ingredient => {
                            if (key.slice(-1) === ingredient.id) {
                                ingredient.measure = value
                            }
                        })
                    }
                }



                console.log(newIngredientArray)
                // console.log(newMeasureArray)

                


    return ( 
        <div>
            <h1>CocktailDetails</h1>
                <div key={cocktail.idDrink}>
                    <h1>{cocktail.strDrink}</h1>
                    <img src={cocktail.strDrinkThumb} alt="Cocktail Preview Picture" />
                    <div>
                        <h2>Zutaten</h2>
                        <ul>
                            {newIngredientArray.map(ingredient => {
                                return <li key={ingredient.id}>{`${ingredient.ingredient} ${ingredient.measure ? ingredient.measure: ""}`}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        {cocktail.strInstructions}
                    </div>
                </div>
        </div>
    )
}
 
export default CocktailDetails;
