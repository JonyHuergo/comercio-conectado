import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h4 className={styles.footerItem}>Trabaja con nosotros</h4>
                <h4 className={styles.footerItem}>Terminos y condiciones</h4>
                <h4 className={styles.footerItem}>Ayuda</h4>
            </div>
            <small className={styles.copyright}>Copyright &copy; Jonathan Huergo</small>
        </footer>
    );
}
 
export default Footer;