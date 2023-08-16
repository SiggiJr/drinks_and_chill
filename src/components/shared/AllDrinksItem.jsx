import React from 'react';
import { Link } from 'react-router-dom';

const AllDrinksItem = (props) => {

        return (
                    <Link to={`/alldrinkslist/${props.id}`}>
            <section>
                <div>
                    <h1>{props.name}</h1>
                    <img src={props.image} alt=""/>
                </div>
            </section>
                    </Link>
        )
}
export default AllDrinksItem;