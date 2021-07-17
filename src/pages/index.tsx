import Head from 'next/head'

import s from 'styles/Home.module.scss'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Bruna Freitas</title>
        <meta name="description" content="Bruna Freitas | Product Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={s.introduction}>
        <div className="container">
          <h1>hello, I&apos;m <span>Bruna.</span></h1>
          <p>Product designer with +4 years of experience. Working on end to end design process, from discovery to delivery. Strategy focused and always in search for the right problems to solve.</p>
          <ul>
            <li>💡 empowering commerce at <strong>olist</strong></li>
            <li>📌 living in São Paulo, Brazil</li>
            <li>🎧 listening to this <strong>playlist</strong></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
