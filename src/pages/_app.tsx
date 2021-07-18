import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import Header from 'src/components/header'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
