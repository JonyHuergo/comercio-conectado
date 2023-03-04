import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/ProductsOnSale.module.css'
import ProductCard from './ProductCard'

const OPTIONS = {
  align: "start"
}

const ProductsOnSale = ({ products }) => {
  const [emblaRef] = useEmblaCarousel(OPTIONS)

  return (
    <>
    
    <div className={styles.embla} ref={emblaRef}>
      <h2>Ofertas</h2>
      <div className={styles.emblaContainer}>
        {products.map( product => (
          <ProductCard product={product}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProductsOnSale;