import Head from 'next/head'

import image10Segundos from 'public/images/10-segundos.png'
import image10SegundosScoreSystem from 'public/images/10-segundos-score-system.png'
import imageIntegraAde02 from 'public/images/integra-ade02.png'

import Project from 'src/components/project'

import s from 'styles/home.module.scss'

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
          <h1>
            hello, I&apos;m <span>Bruna.</span>
          </h1>
          <p>
            Product designer with +4 years of experience. Working on end to end
            design process, from discovery to delivery. Strategy focused and
            always in search for the right problems to solve.
          </p>
          <ul>
            <li>
              💡 empowering commerce at <a href="https://olist.com/" target="_blank" rel="noreferrer">olist</a>
            </li>
            <li>📌 living in São Paulo, Brazil</li>
            <li>
              🎧 listening to this <a href="https://open.spotify.com/playlist/4HFHFdf76F4kq5zpJ2ScIM" target="_blank" rel="noreferrer">playlist</a>
            </li>
          </ul>
        </div>
      </section>


      <section className={s.projects}>
        <div className="container">
          <Project
            title="10 segundos"
            text="app that adds a little bit of entertainment into studying experience"
            link="https://www.notion.so/Descomplica-10-segundos-app-aa1deb5181bf43dfb624889183e3a79f"
            image={{
              src: image10Segundos,
              alt: 'Prints from the mobile app "10 segundos"'
            }}
            tags={['ux design', 'ui design', 'product design']}
          />
          <Project
            title="10 segundos score system "
            text="a new way of rewarding students on 10 segundos app"
            link="https://www.notion.so/10-segundos-score-system-9113210378004115b32446ffd8e0252b"
            image={{
              src: image10SegundosScoreSystem,
              alt: 'Prints from the website "10 segundos score system "'
            }}
            tags={['ux design', 'ui design', 'product design']}
            inverted
          />
          <Project
            title="integra ade02"
            text="heuristics analysis and UI design leading to a better experience"
            link="https://www.notion.so/Integra-ADE02-36766d4ef06e4f49b4fa603fa56e0e3c"
            image={{
              src: imageIntegraAde02,
              alt: 'Prints from the website "integra ade02"'
            }}
            tags={['ux design', 'ui design']}
          />
        </div>
      </section>
    </main>
  )
}
