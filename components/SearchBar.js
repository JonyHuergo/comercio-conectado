import { useState, useEffect } from "react";
/* import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'; */
import Link from 'next/link';
import styles from '../styles/SearchBar.module.css'
import { useRouter, withRouter } from 'next/router'

const SearchBar = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");
    const router = useRouter()

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 

    const handleFilter = (event) => {
        const searchWord = removeAccents(event.target.value.toLowerCase());
        setwordEntered(searchWord)
        const newFilter = data.filter((value) => {
            const name = removeAccents(value.node.name.toLowerCase());
            return name.includes(searchWord);
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            router.push({
                pathname: '../search',
                query: {word: wordEntered},
            })
        }
    }

    return (
        <div className={styles.searchBarContainer}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder={placeholder}
                onChange={handleFilter}
                value={wordEntered}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <div className='absolute right-2 top-2'>
                {/* {wordEntered.length === 0 ?
                    <SearchIcon/> :
                    <CloseIcon className="cursor-pointer" onClick={clearInput} />
                } */}
            </div>
            {filteredData.length != 0 && (
            <div className={styles.searchBarResults}>
                {filteredData.slice(0, 15).map((product, index) => {
                    return (
                        <div key={index} className={styles.searchBarResultContainer}>
                        <Link href={`../product/${product.node.slug}`}>
                            <div className={styles.searchBarResult}>
                                {product.node.name}
                            </div>
                        </Link>
                        </div>
                    )
                })}
            </div>
            )}
        </div>
    );
}
 
export default withRouter(SearchBar);