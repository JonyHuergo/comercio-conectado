import Link from 'next/link'
import styles from '../styles/FeaturedBrands.module.css'


const FeaturedBrands = ({ brands }) => {
  return (
    <div className={styles.brandsSection}>
      <h2 className={styles.brandsSectionTitle}>Marcas</h2>
      <div className={styles.brands}>
        {brands.map( brand => (
          <div className={styles.brandContainer} key={brand.slug}>
            <Link href={`./brand/${brand.slug}`}>
              <img className={styles.logo} src={brand.logo.url} alt={brand.name} />
              <h3 className={styles.brandName} >{brand.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedBrands;