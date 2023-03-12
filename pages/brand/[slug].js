import { getFeaturedBrands, getBrand, getBrandProducts } from '../../services';
import styles from '../../styles/Brand.module.css'
import { ListedProducts } from '../../components'

const Brand = ({brand, brandProducts}) => {
    return (
        <div className={styles.brandPage}>
            <div className={styles.brandPageBanner}>
                <img className={styles.brandBackground} src={brand.backgroundImage.url} alt="Background" />
                <img className={styles.brandLogo} src={brand.logo.url} alt="Logo" />
            </div>
            <div className={styles.listedProductsContainer}>
                <h1><b>Productos {brand.name}</b></h1>
                <ListedProducts products={brandProducts}/>
            </div>
        </div>
    );
}
 
export default Brand;

export async function getStaticProps({ params }) {
  const data = await getBrand(params.slug);
  const brandProducts = (await getBrandProducts(params.slug)) || [];

  return {
    props: { brand: data, brandProducts }
  }
}

export async function getStaticPaths() {
  const brands = (await getFeaturedBrands()) || [];
  return {
    paths: brands.map(({slug: slug}) => ({ params : {slug} })),
    fallback: false,
  }
}