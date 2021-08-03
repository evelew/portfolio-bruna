import { Fragment } from 'react'
import Head from 'next/head'

import s from 'styles/contact.module.scss'

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Bruna Freitas | contact</title>
        <meta name="description" content="Bruna Freitas | Product Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className={s.title}>hi,</h1>
        <div className={s.content}>
          <p>
            Feel free to reach me out throgh my e-mail{' '}
            <i>brunasfreitas2@gmail.com</i>
            or any of my contacts below:
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
