import React from 'react';
import { Link } from 'react-router-dom';

const AllDrinksItem = (props) => {

        return (
            <section>
                <div>
                    <Link to={`/alldrinkslist/${props.id}`}></Link>
                    <h1>{props.name}</h1>
                    <img src={props.image} alt=""/>
                </div>
            </section>
        )
}
export default AllDrinksItem;