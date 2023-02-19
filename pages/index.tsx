import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halaman Rumah | The Melankolia</title>
      </Head>
      <img
        src="/img/placeholder_bg.jpg"
        alt="Placeholder"
        className={styles.img}
        loading="lazy"
      />
    </>
  )
}
