import { BukuTamu } from '@/components/BukuTamu'
import Head from 'next/head'
import Script from 'next/script'

export default function BukuTamuPage() {
  return (
    <>
      <Head>
        <title>Halaman Buku Tamu | The Melankolia</title>
      </Head>
      <Script src="//embed.typeform.com/next/embed.js" />
      <BukuTamu />
    </>
  )
}
