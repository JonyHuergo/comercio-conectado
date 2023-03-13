import Link from 'next/link';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPercent, BsCart3 } from 'react-icons/bs';
import { TbCategory2 } from 'react-icons/tb';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useStateContext } from '../context/StateContext';
import { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../services'
import SearchBar from "./SearchBar";
import styles from '../styles/SideMenu.module.css'

const SideMenu = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [productData, setproductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { setShowSideMenu, showCart, setShowCart } = useStateContext();

  const toggleShowCategories = () => {
    showCategories ? setShowCategories(false) : setShowCategories(true)
  }

  const toggleShowSearchBar = () => {
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true)
  }

  const toggleCart = () => {
    if(showCart) {
      setShowCart(false);
    } else {
      setShowSideMenu(false);
      setShowCart(true);
    }
  }

  useEffect(() => {
    getCategories()
        .then((result) => setCategories(result))
  }, []);

  useEffect(() => {
        getProducts()
            .then((result) => setproductData(result))
  }, []);

  return (
    <div className={styles.sideMenuWrapper}>
      <div className={styles.sideMenu}>
        <div className={styles.buttonsContainer}>
            <button onClick={() => setShowSideMenu(false)} className={styles.sideMenuButton}><GiHamburgerMenu/></button>
            <button onClick={toggleCart} className={styles.sideMenuButton}><MdOutlineShoppingCart/></button>
            <Link href={"/onSale"}><button onClick={() => setShowSideMenu(false)} className={styles.sideMenuButton}><BsPercent/></button></Link>      
            <span className={styles.dropdown}>
                <button onClick={toggleShowSearchBar} className={styles.sideMenuButton}><RxMagnifyingGlass/></button>
                {showSearchBar &&
                    <div className={styles.searchBar}>
                        <SearchBar placeholder="Buscar productos" data={productData} />
                    </div>
                }
            </span>
            <span className={styles.dropdown}>
                <button onClick={toggleShowCategories} className={styles.sideMenuButton}><TbCategory2/></button>
                {showCategories &&
                    <div className={styles.dropdownContent}>
                        {categories.map((category) => (
                            <Link href={`/category/${category.slug}`} key={category.slug} onClick={() => setShowSideMenu(false)}>
                                <p>{category.name}</p>
                            </Link>
                        ))}
                    </div>
                }
            </span>
        </div>
      </div>
      <div className={styles.cartBackground} onClick={() => setShowSideMenu(false)}/>
    </div>
  )
}

export default SideMenu