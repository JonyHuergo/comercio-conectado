import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import SearchBar from "./SearchBar";
import { getProducts } from '../services'
/* import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'; */

const Navbar = () => {
    const [data, setData] = useState([]);
    const [searchBarOpen, setsearchBarOpen] = useState(false)

    useEffect(() => {
        getProducts()
            .then((result) => setData(result))
    }, []);

    const manageSearchBar = () => {
        searchBarOpen ? setsearchBarOpen(false) : setsearchBarOpen(true)
    };

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
            <span>{/* <input type="text" placeholder="Buscar" /> */}<SearchBar placeholder="Buscar productos" data={data} /></span>
            <span><i className="material-symbols-outlined">shopping_cart</i></span>
        </nav>
    );
}
 
export default Navbar;