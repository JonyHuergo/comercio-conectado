import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Comercio Conectado</title>
        <meta name="description" content="Compra en la mejor tienda online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>BANNER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae error explicabo qui dicta voluptatem itaque sit. Illo, eveniet esse?</p>
      </main>
    </>
  )
}
