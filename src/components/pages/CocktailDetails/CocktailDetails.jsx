import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router'


const CocktailDetails = () => {
    
    const [cocktail, setCocktail] = useState([]);
    
    const cocktailId = useParams().id 
    const link = cocktailId === "random" ? "random.php" : `lookup.php?i=${cocktailId}` 
    
    useEffect(() => {
        
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${link}`)
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
    
    const navigator = useNavigate();
    
    
    console.log(newIngredientArray)
                // console.log(newMeasureArray)

                


    return ( 
        <div>
            <button onClick={() => navigator(-1)} >Zurück</button>
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
