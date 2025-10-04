import type { AppProps } from 'next/app'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import ExternalLinks from '@/app/components/external-links'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
        <ExternalLinks />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
