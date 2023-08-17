import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import styles from './CocktailDetails.module.scss'
// import { theX } from '../../../assets/img/react.svg'

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

    return ( 
        <div className={styles.div}>
            <div className={styles.headerDiv}>
                <button className={styles.button} onClick={() => navigator(-1)} >X</button>
                <h1 className={styles.headline} >{cocktail.strDrink}</h1>
            </div>
                <div key={cocktail.idDrink}>
                    <img className={styles.image} src={cocktail.strDrinkThumb} alt="Cocktail Preview Picture" />
                    <div className={styles.Zutaten} >
                        <div className={styles.test}>
                        <h2>Zutaten</h2>
                        <ul>
                            {newIngredientArray.map(ingredient => {
                                return <li className={styles.list} key={ingredient.id}>{`${ingredient.ingredient} ${ingredient.measure ? ingredient.measure: ""}`}</li>
                            })}
                        </ul>
                        </div>
                        <div className={styles.instruction} >
                            {cocktail.strInstructions}
                        </div>
                    </div>
                </div>
        </div>
    )
}
 
export default CocktailDetails;
