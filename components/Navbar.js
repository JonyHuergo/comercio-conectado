import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import SearchBar from "./SearchBar";
import { getProducts, getCategories } from '../services'
import Link from 'next/link';
/* import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'; */
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    const [productData, setproductData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchBarOpen, setsearchBarOpen] = useState(false)
    const {showCart, setShowCart} = useStateContext();

    useEffect(() => {
        getProducts()
            .then((result) => setproductData(result))
    }, []);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result))
    }, []);

    const manageSearchBar = () => {
        searchBarOpen ? setsearchBarOpen(false) : setsearchBarOpen(true)
    };

    const toggleCart = () => {
        showCart ? setShowCart(false) : setShowCart(true)
    }

    return (
        <nav className={styles.navContainer}>
            <span>
                <Link href={"/"}>
                <img
                src="/logo-2.png"
                alt="Logo"
                width={200}
                heigth={100}
                />
                </Link>
            </span>
            <span><Link href={"/onSale"}><b>Ofertas</b></Link></span>
            <span class={styles.dropdown}>
                <span><b>Categorias</b></span>
                <div class={styles.dropdownContent}>
                    {categories.map((category) => (
                        <Link href={`/category/${category.slug}`}>
                            <p>{category.name}</p>
                        </Link>
                    ))}
                </div>
            </span>
            <span><SearchBar placeholder="Buscar productos" data={productData} /></span>
            <span onClick={toggleCart} class={styles.cart}><i className="material-symbols-outlined">shopping_cart</i></span>
        </nav>
    );
}
 
export default Navbar;