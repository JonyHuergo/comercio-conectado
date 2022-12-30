import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <span>
                <img
                src="/logo-2.png"
                alt="Logo"
                width={200}
                heigth={100}
                />
            </span>
            <span>Ofertas</span>
            <span>Categorias</span>
            <span><input type="text" placeholder="Buscar" /></span>
            <span><i className="material-symbols-outlined">shopping_cart</i></span>
        </nav>
    );
}
 
export default Navbar;