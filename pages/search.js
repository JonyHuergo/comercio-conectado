import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { getFilteredProducts } from "../services";
import styles from '../styles/Search.module.css'
import { ListedProducts } from "../components";

const Search = () => {
    const [data, setData] = useState([]);
    const router = useRouter()
    const query = router.query
    const searchWord = query.word

    useEffect(() => {
        getFilteredProducts(searchWord)
            .then((result) => setData(result))
    });

    return (
        <div className={styles.searchPage}>
            <div className={styles.listedProductsContainer}>
                <div className={styles.searchPageTitle}>
                    <h1>Resultados para: "<b>{searchWord}</b>"</h1>
                </div>
                <ListedProducts products={data}/>
            </div>
        </div>
    );
}
 
export default Search;