import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Navbar, FeaturedProducts } from '../components'
import { getFeaturedCategories, getFeaturedBrands, getFeaturedProducts } from '../services'

export default function Home({ categories, brands, products }) {
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
        <FeaturedProducts products={products}/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const categories = (await getFeaturedCategories()) || [];
  const brands = (await getFeaturedBrands()) || [];
  const products = (await getFeaturedProducts()) || [];

  return {
    props: { categories, brands, products }
  }
}
