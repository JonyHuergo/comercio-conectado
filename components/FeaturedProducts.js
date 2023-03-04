import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import styles from '../styles/FeaturedProducts.module.css'
import ProductCard from './ProductCard'

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
          <ProductCard product={product}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default FeaturedProducts;