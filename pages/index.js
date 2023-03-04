import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Navbar, FeaturedProducts, ProductsOnSale, FeaturedBrands, Footer } from '../components'
import { getFeaturedCategories, getFeaturedBrands, getFeaturedProducts, getProductsOnSale } from '../services'

export default function Home({ categories, brands, featuredProducts, productsOnSale }) {
  return (
    <>
      <Head>
        <title>Comercio Conectado</title>
        <meta name="description" content="Compra en la mejor tienda online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <Banner/>
        <FeaturedProducts products={featuredProducts}/>
        <ProductsOnSale products={productsOnSale}/>
        <FeaturedBrands brands={brands}/>
        <Footer/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const categories = (await getFeaturedCategories()) || [];
  const brands = (await getFeaturedBrands()) || [];
  const featuredProducts = (await getFeaturedProducts()) || [];
  const productsOnSale = (await getProductsOnSale()) || [];

  return {
    props: { categories, brands, featuredProducts, productsOnSale }
  }
}
