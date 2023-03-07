import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { getFilteredProducts } from "../services";

const Search = () => {
    const [data, setData] = useState([]);
    const router = useRouter()
    const query = router.query
    const searchWord = query.word

    useEffect(() => {
        getFilteredProducts(searchWord)
            .then((result) => setData(result))
    }, []);

    return (
        <div>
            <h1>Search for: {searchWord}</h1>
            {data.map( product => (
                <p>{product.name}</p>
            ))}
        </div>
    );
}
 
export default Search;