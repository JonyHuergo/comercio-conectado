import { useState } from 'react';
import { getProducts, getProductDetails } from '../../services';
import styles from '/styles/ProductDetail.module.css';
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { useStateContext } from '../../context/StateContext';
import { ReviewsForm, Reviews } from '../../components';

const ProductDetail = ({ product }) => {
  const [index, setIndex] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useStateContext();

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  }

    return (
      <div className={styles.productDetailPage} >
        <div className={styles.productDetailContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.largeImgContainer}>
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
                  <button className={styles.addToCart} onClick={() => addToCart(product, quantity)}>AGREGAR AL CARRITO</button>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.productReviewContainer}>
          <ReviewsForm slug={product.slug}/>
          <Reviews slug={product.slug}/>
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