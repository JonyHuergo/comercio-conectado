import { getCategoryProducts, getCategories, getCategory } from '../../services';
import styles from '../../styles/Category.module.css'
import { ListedProducts } from '../../components'

const Category = ({category, categoryProducts}) => {

    return (
        <div className={styles.categoryPage}>
            <div className={styles.categoryPageBanner}>
                <img className={styles.categoryBackground} src={category.backgroundImage.url} alt="Background" />
            </div>
            <div className={styles.listedProductsContainer}>
                <h1><b>{category.name}</b></h1>
                <ListedProducts products={categoryProducts}/>
            </div>
        </div>
    );
}
 
export default Category;

export async function getStaticProps({ params }) {
  const data = await getCategory(params.slug);
  const categoryProducts = (await getCategoryProducts(params.slug)) || [];

  return {
    props: { category: data, categoryProducts }
  }
}

export async function getStaticPaths() {
  const categories = (await getCategories()) || [];
  return {
    paths: categories.map(({slug: slug}) => ({ params : {slug} })),
    fallback: false,
  }
}