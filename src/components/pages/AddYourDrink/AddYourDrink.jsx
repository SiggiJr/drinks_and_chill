import React from 'react';
import image1 from '../../../assets/img/AddYourDrinkImage1.png';
import image2 from '../../../assets/img/AddYourDrinkImage2.png';
import image3 from '../../../assets/img/AddYourDrinkImage3.png';
import styles from './AddYourDrink.module.scss';


const AddYourDrink = () => {
    return (  
        <>
        <div className={styles.div}>
        <h1>Füge deine eigenen Getränke hinzu!</h1>
        <section className={styles.overall_add} >
        <form className={styles.form} >
            <div className={styles.form_div} >
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" name="kategorie" id="kategorie" placeholder="Kategorie" />
            <input type="text" name="bild_url" id="bild_url" placeholder="Bild URL" />
            <textarea name="anleitung" id="anleitung" cols="30" rows="10" placeholder="Anleitung"></textarea>
            <input type="text" name="zutat_1" id="zutat_1" placeholder="Zutat 1" />
            <input type="text" name="menge_1" id="menge_1" placeholder="Menge Zutat 1" />
            <input type="text" name="zutat_2" id="zutat_2" placeholder="Zutat 2" />
            <input type="text" name="menge_2" id="menge_2" placeholder="Menge Zutat 2" />
            <input type="text" name="zutat_3" id="zutat_3" placeholder="Zutat 3" />
            <input type="text" name="menge_3" id="menge_3" placeholder="Menge Zutat 3" />
            <button type="submit">Submit</button>
            </div>
        </form>
            <article className={styles.article_img} >
                <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
            </article>
        </section>
        </div>
        </>
    );
}
 
export default AddYourDrink;