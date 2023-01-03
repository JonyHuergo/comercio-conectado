import { getProducts, getProductDetails } from '../../services'

const ProductDetail = ({ product }) => {
    return (
        <h1>{product.name}</h1>
    );
}
 
export default ProductDetail;

export async function getStaticProps({ params }) {
  const data = await getProductDetails(params.slug);

  return {
    props: { product: data }
  }
}

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map(({ node: { slug }}) => ({ params : { slug }})),
    fallback: false,
  }
}