import styles from '../styles/FeaturedProducts.module.css'
import CarouselCard from './CarouselCard'
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

const FeaturedProducts = ({ products }) => {
  
  return (
    <>
    
    <div className={styles.featured}>
      <h2 className={styles.featuredTitle}>Productos Destacados</h2>
      <Carousel
        responsive={responsive}
        containerClass={styles.featuredCarouselContainer}
        showDots={true}
        ssr={true}
        arrows={false}
      >
        {products.map( product => (
          <CarouselCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
    </>
  )
}

export default FeaturedProducts;