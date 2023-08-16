import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./AllDrinksItem.module.scss";

const AllDrinksItem = (props) => {

        return (
            <section>
                <div>
                    <Link to={`/alldrinkslist/${props.id}`}></Link>
                    <h1>{props.name}</h1>
                    <img src={props.image} alt={props.name}/>
                </div>
            </section>
        )
}
export default AllDrinksItem;