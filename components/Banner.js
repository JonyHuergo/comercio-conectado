import styles from '../styles/Banner.module.css'

const Banner = () => {
    return (
        <header className={styles.banner}>
            <img src="/banner.png" alt="Banner" className={styles.bannerImg}/>
            <div className={styles.bannerText}>
                <h1>Todo lo que necesitas, en un solo lugar</h1>
                <p>
                    Compra de la manera más simple en Comercio Conectado. Cientos de productos al alcance de tu mano en una sola página. Simple, rápido, Comercio Conectado.
                </p>
            </div>
        </header>
    );
}
 
export default Banner;