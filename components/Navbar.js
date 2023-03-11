import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import SearchBar from "./SearchBar";
import { getProducts } from '../services'
import Link from 'next/link';
/* import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'; */
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    const [data, setData] = useState([]);
    const [searchBarOpen, setsearchBarOpen] = useState(false)
    const {showCart, setShowCart} = useStateContext();

    useEffect(() => {
        getProducts()
            .then((result) => setData(result))
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
            <span><Link href={"/onSale"}>Ofertas</Link></span>
            <span>Categorias</span>
            <span>{/* <input type="text" placeholder="Buscar" /> */}<SearchBar placeholder="Buscar productos" data={data} /></span>
            <span onClick={toggleCart}><i className="material-symbols-outlined">shopping_cart</i></span>
        </nav>
    );
}
 
export default Navbar;