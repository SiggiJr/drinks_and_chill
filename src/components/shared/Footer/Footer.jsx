import styles from "./Footer.module.scss"

const Footer = () => {

    return (
        <section className={styles.section}>
            <article className={styles.article}>
                <h2 className={styles.headline}>Genuss hat viele Facetten...</h2>
                <p className={styles.p_text}>...aber ohne das richtige Maß geht es nicht! 
                Cocktails kann man mit allen Sinnen genießen. Zum Cocktail-Genuss gehören neben dem Geschmack natürlich auch die Optik, 
                die Farbe und die verschiedenen Aromen, die im Zusammenspiel ganz neue Assoziationen wecken und unterbewusst auch den Geschmack
                beeinflussen.
                </p>
            </article>
        </section>
    )
}
export default Footer;