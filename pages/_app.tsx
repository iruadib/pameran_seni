import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@/components/NavBar'
import styles from '@/styles/_app.module.css'
import { LoadingSc } from '@/components/LoadingSc'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingSc />
      <NavBar />
      <div className={styles.cont}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
