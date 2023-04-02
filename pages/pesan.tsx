import { Pesan } from '@/components/Pesan'
import Head from 'next/head'
import Script from 'next/script'

export default function BukuTamuPage() {
  return (
    <>
      <Head>
        <title>Halaman Kesan dan Pesan | The Melankolia</title>
      </Head>
      <Script src="//embed.typeform.com/next/embed.js" />
      <Pesan />
    </>
  )
}
