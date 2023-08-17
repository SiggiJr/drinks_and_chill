import { useEffect, useState } from "react";
import AllDrinksItem from "../shared/AllDrinksItem";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";



const AllDrinksListByIngredient = ({drinksData}) => {

    const [allCategories, setAllCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const {showSearch ,setShowSearch} = useOutletContext();

    // setShowSearch(true)

    let link;

    const param = useParams().ingredient

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
        case "alkoholisch":
            link="filter.php?a=Alcoholic"
            break;
        // default: 
        //     link=`search.php?s=${drinksData}`
        //     break;
    }

    if (drinksData) {
        link = `search.php?s=${drinksData}`;
    }

    useEffect(() => {
        const timeouId = setTimeout(() => {
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
        }, 300)
        return () => {
                clearTimeout(timeouId)
            }
    }, [drinksData, param])
    if(isLoading) {
        return <p>Loading...</p>
    }
    

        return (
            <>
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