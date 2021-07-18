import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import Header from 'src/components/header'
import Footer from 'src/components/footer'
import ExternalLinks from 'src/components/external-links'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <ExternalLinks />
      <Footer />
    </Fragment>
  )
}

export default MyApp
