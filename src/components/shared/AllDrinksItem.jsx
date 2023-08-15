import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AllDrinksItem = (props) => {
    
    const [oneDrink, setOneDrink] = useState({})


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error alldrinksitem")
            }
            return response.json();
        })
        .then(data => setOneDrink(data.drinks))
        .catch((error) => console.log(error.message))
        }, [])

        return (
            <section>
                <div>
                    <Link to={`/alldrinkslist/${props.id}`}></Link>
                    <h1>{props.name}</h1>
                </div>
            </section>
        )
}
export default AllDrinksItem;