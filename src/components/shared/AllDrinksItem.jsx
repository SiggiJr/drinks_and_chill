import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./AllDrinksItem.module.scss";

const AllDrinksItem = (props) => {

        return (
                    <Link className={styles.link} to={`/alldrinkslist/${props.id}`}>
            <section className={styles.section}>
                <div className={styles.div}>
                    <h1 className={styles.headline}>{props.name}</h1>
                    <img className={styles.img} src={props.image} alt={props.name}/>
                </div>
            </section>
                    </Link>
        )
}
export default AllDrinksItem;