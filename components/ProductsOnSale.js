import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import styles from '../styles/ProductsOnSale.module.css'

const OPTIONS = {
  align: "start"
}

const ProductsOnSale = ({ products }) => {
  const [emblaRef] = useEmblaCarousel(OPTIONS)
  
  return (
    <>
    
    <div className={styles.embla} ref={emblaRef}>
      <h2>Descuentos</h2>
      <div className={styles.emblaContainer}>
        {products.map( product => (
          <Link href={`./product/${product.slug}`} key={product.id}>
          <div className={styles.emblaSlide}>
            <div className={styles.emblaSlideImage}>
              <img src={product.mainPhoto.url} alt={product.name} className={styles.emblaSlideImg}/>
            </div>
            <h3>{product.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProductsOnSale;