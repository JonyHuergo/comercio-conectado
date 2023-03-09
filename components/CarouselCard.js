import Link from 'next/link'
import styles from '../styles/CarouselCard.module.css'

const ProductCard = ({ product }) => {
    return (
        <Link href={`./product/${product.slug}`} key={product.id}>
          <div className={styles.productCard}>
            <div className={styles.productCardImgContainer}>
              <img src={product.mainPhoto.url} alt={product.name} className={styles.productCardImg}/>
            </div>
            <div className={styles.productCardTextContainer}>
              <h3>{product.name}</h3>
              {product.isOnSale?
                  <div>
                      <p className={styles.salePrice}><b>$ {product.salePrice}</b></p>
                      <p className={styles.price}><s>$ {product.price}</s></p>
                  </div>
                  :
                  <p className={styles.price}><b>$ {product.price}</b></p>}
            </div>
          </div>
        </Link>
    );
}
 
export default ProductCard;