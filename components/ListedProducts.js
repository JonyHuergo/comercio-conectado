import ProductCard from "./ProductCard";
import styles from '../styles/ListedProducts.module.css'

const ListedProducts = ({products}) => {
    return (
        <div className={styles.listedProducts}>
            {products.map( product => (
                <ProductCard key={product.slug} product={product}/>
            ))}
        </div>
    );
}
 
export default ListedProducts;