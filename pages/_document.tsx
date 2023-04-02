import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Script
          src="//embed.typeform.com/next/embed.js"
          strategy="lazyOnload"
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
