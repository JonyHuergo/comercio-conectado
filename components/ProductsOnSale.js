import styles from '../styles/ProductsOnSale.module.css'
import ProductCard from './ProductCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  xl: {
    breakpoint: { max: 4000, min: 1700 },
    items: 4,
    slidesToSlide: 4,
  },
  l: {
    breakpoint: { max: 1700, min: 1200 },
    items: 3,
    slidesToSlide: 3,
  },
  m: {
    breakpoint: { max: 1200, min: 850 },
    items: 2,
    slidesToSlide: 2,
  },
  s: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProductsOnSale = ({ products }) => {

  return (
    <div className={styles.saleSection}>
      <img src="/saleBanner.jpg" alt="sale banner" className={styles.saleBannerImg}/>
      <div className={styles.saleSectionContent}>
        <h2 className={styles.saleSectionTitle}>Ofertas</h2>
        <Carousel
          responsive={responsive}
          containerClass={styles.saleSectionCarouselContainer}
          showDots={true}
          ssr={true}
          arrows={false}
        >
          {products.map( product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ProductsOnSale;