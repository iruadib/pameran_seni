import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Carousel } from '@/components/Carousel'
import { GlitchText } from '@/components/GlitchText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halaman Rumah | The Melankolia</title>
      </Head>
      <Carousel />
      <GlitchText />
    </>
  )
}
