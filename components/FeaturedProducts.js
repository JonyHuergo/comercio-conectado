import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/FeaturedProducts.module.css'

const OPTIONS = {
  align: "start"
}

const FeaturedProducts = ({ products }) => {
  const [emblaRef] = useEmblaCarousel(OPTIONS)
  
  return (
    <>
    
    <div className={styles.embla} ref={emblaRef}>
      <h2>Productos Destacados</h2>
      <div className={styles.emblaContainer}>
        {products.map( product => (
          <div className={styles.emblaSlide}>
            <div className={styles.emblaSlideImage}>
              <img src={product.mainPhoto.url} alt={product.name} className={styles.emblaSlideImg}/>
            </div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default FeaturedProducts;