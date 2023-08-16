import { useEffect, useState } from "react";
import AllDrinksItem from "../shared/AllDrinksItem";
import { useParams } from "react-router-dom";

const AllDrinksListByIngredient = () => {

    const [allCategories, setAllCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let link;

    const param = useParams().ingredient

    console.log(param);

    switch (param) {
        case "gin":
            link="filter.php?i=Gin"
            break;
        case "vodka":
            link="filter.php?i=Gin"
            break;
        case "rum":
            link="filter.php?i=Rum"
            break;
        case "scotch":
            link="filter.php?i=Scotch"
            break;
        case "alkoholfrei":
            link="filter.php?a=Non_Alcoholic"
            break;
        case "zufall":
            link="random.php"
            break;
    }

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${link}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error alldrinkslist")
            }
            return response.json();
        })
        .then(data => {
            setIsLoading(false)
            setAllCategories(data.drinks)
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
                image={cat.strDrinkThumb}
                />
                )}
            </div>
            </>
        )
}
export default AllDrinksListByIngredient;