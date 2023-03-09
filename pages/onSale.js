import styles from '../styles/OnSale.module.css'
import { ListedProducts } from '../components'
import { getProductsOnSale } from '../services'

export default function OnSale({ productsOnSale }) {
  return (
        <div className={styles.onSalePage}>
            <div className={styles.onSalePageTitle}>
                <h1></h1>
            </div>
            <div className={styles.listedProductsContainer}>
                <ListedProducts products={productsOnSale}/>
            </div>
        </div>
    );
}

export async function getStaticProps() {
  const productsOnSale = (await getProductsOnSale()) || [];
  return {
    props: { productsOnSale }
  }
}