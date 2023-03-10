import { useState } from 'react';
import { getProducts, getProductDetails } from '../../services';
import styles from '/styles/ProductDetail.module.css';
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { useStateContext } from '../../context/StateContext';

const ProductDetail = ({ product }) => {
  const [index, setIndex] = useState(-1);
  const {decreaseQuantity, increaseQuantity, quantity} = useStateContext();

    return (
      <div className={styles.productDetailPage} >
        <div className={styles.productDetailContainer}>
          <div className={styles.imgContainer}>
            <div>
              {index === -1 ?
                <img src={product.mainPhoto.url} alt="Product Photo" className={styles.productDetailImg} /> :
                <img src={product.photos[index].url} alt="Product Photo" className={styles.productDetailImg} />
              }
            </div>
            <div className={styles.smallImgContainer}>
              <img src={product.mainPhoto.url} alt="Another photo of this product" className={index === -1 ? styles.selectedImg : styles.smallImg} onMouseEnter={() => setIndex(-1)} />
              {product.photos.map((photo, i) => (
                <img src={photo.url} alt="Another photo of this product" className={i === index ? styles.selectedImg : styles.smallImg} onMouseEnter={() => setIndex(i)}/>
              ))}
            </div>
          </div>
          <div className={styles.productDetailDesc}>
              <h1>{product.name}</h1>
              <div className={styles.reviews}>

              </div>
              <h4>Descripción: </h4>
              <p>{product.description}</p>
              {product.isOnSale ?
                <span>
                  <p className={styles.salePrice}><b>${product.salePrice}</b></p>
                  <p className={styles.price}><s>${product.price}</s></p>
                </span> :
                <p className={styles.price}>${product.price}</p>
              }
              <div className={styles.quantity}>
                <h3>Cantidad: </h3>
                <p className={styles.quantityDesc}>
                  <span className={styles.minus} onClick={decreaseQuantity}><AiOutlineMinus/></span>
                  <span className={styles.num}><b>{quantity}</b></span>
                  <span className={styles.plus} onClick={increaseQuantity}><AiOutlinePlus/></span>
                </p>
                <div className={styles.buttons}>
                  <button className={styles.addToCart}>AGREGAR AL CARRITO</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
}
 
export default ProductDetail;

export async function getStaticProps({ params }) {
  const data = await getProductDetails(params.slug);

  return {
    props: { product: data }
  }
}

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map(({ node: { slug }}) => ({ params : { slug }})),
    fallback: false,
  }
}