import { Fragment } from 'react'
import Head from 'next/head'

import s from 'styles/about.module.scss'

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Bruna Freitas | about</title>
        <meta name="description" content="Bruna Freitas | Product Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className={s.title}>hi,</h1>
        <div className={s.content}>
          <p>
            I&rsquo;m Bruna Freitas, a 28 year old designer from Rio de Janeiro
            that currently lives in São Paulo, Brazil. I&rsquo;ve graduated in
            Visual Communications - Design at Universidade Federal do Rio de
            Janeiro (UFRJ).
          </p>
          <p>
            Since graduation, I have experimented with some of the possibilities
            design offers as a career. A few years ago I started my way in UX
            and Product Design and I couldn&rsquo;t be happier. I am always
            trying to learn new things and putting into practice theories
            learned. My goal is to solve problems in order to improve the
            user&rsquo;s life, always taking into account the business needs.
          </p>

          <p>
            I am currently working at <strong>olist</strong>, a company focused
            on empowering merchants to sell online.
          </p>

          <p>
            When I&rsquo;m not designing, you find me watching trash movies (if
            you find any better than Rubber, please let me know. Seriously.),
            watching interior design realities, or in some karaoke in the city
            with a long neck in hand (before pandemic).
          </p>

          <p>
            Feel free to reach me out throgh my e-mail brunasfreitas2@gmail.com
            or any of my contacts below:
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default About
