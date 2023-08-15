//import ITEM from './';
import { useEffect, useState } from "react";
import AllDrinksItem from "../shared/AllDrinksItem";

const AllDrinksListByIngredient = () => {

    const [allCategories, setAllCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error alldrinkslist")
            }
            return response.json();
        })
        .then(data => {
            setIsLoading(false)
            return setAllCategories(data.drinks)
        })
        .catch((error) => console.log(error.message))
        }, [])
        console.log(allCategories)
        if(isLoading) {
            return <p>Loading...</p>
        }

        return (
            <>
            <h1>All Drinks</h1>
            <div>
                {allCategories.map((cat) =>
                <AllDrinksItem 
                key={cat.idDrink}
                id={cat.idDrink}
                name={cat.strDrink}
                />
                )}
            </div>
            </>
        )
}
export default AllDrinksListByIngredient;