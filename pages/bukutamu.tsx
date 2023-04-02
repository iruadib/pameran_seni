import { BukuTamu } from '@/components/BukuTamu'
import Head from 'next/head'
import Script from 'next/script'

export default function BukuTamuPage() {
  return (
    <>
      <Head>
        <title>Halaman Buku Tamu | The Melankolia</title>
      </Head>
      <BukuTamu />
    </>
  )
}
