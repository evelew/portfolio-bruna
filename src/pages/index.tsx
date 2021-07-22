import Head from 'next/head'
import Image from 'next/image'

import imageNerdFaceEmoji from 'public/images/nerd-face.png'
import image10Segundos from 'public/images/10-segundos.png'
import image10SegundosScoreSystem from 'public/images/10-segundos-score-system.png'
import imageIntegraAde02 from 'public/images/integra-ade02.png'

import Project from 'src/components/project'
import GoTotopButton from 'src/components/go-to-top-button'

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
          <div className={s['introduction__emoji']}>
            <Image src={imageNerdFaceEmoji} alt="Nerd face emoji" />
          </div>

          <h1 className={s['introduction__title']}>
            hello, I&apos;m{' '}
            <span className={s['introduction__title-name']}>
              Bruna.
              <span className={s['introduction__title-svg']}>
                <svg width="273" height="131" viewBox="0 0 273 131" fill="none">
                  <path
                    className={s.path}
                    d="M206.571 15.2966C189.158 18.3676 171.746 21.4387 154.333 24.5098C123.975 29.8642 93.4353 34.8777 63.2574 41.1435C48.7703 44.1514 31.1386 47.0522 20.0689 55.9868C11.4716 62.9258 4.61591 74.6853 6.75102 83.5318C11.9704 105.157 53.2492 106.88 78.067 107.369C106.509 107.929 130.802 103.245 163.473 95.2059C188.369 89.08 209.477 82.461 225.454 74.815C239.219 68.2274 248.322 61.7419 255.144 55.8221C263.31 48.7367 269.321 38.9324 259.189 32.7811C251.959 28.3911 241.707 25.629 232.67 23.6005C215.507 19.7484 197.242 18.1334 178.642 18.511C142.373 19.2473 102.748 25.2703 68.6784 37.9055C56.1329 42.5581 37.1074 50.8672 34.2571 62.0653C32.0992 70.5432 35.1225 80.6415 39.1703 88.035C44.3474 97.4913 53.8499 105.033 65.9282 109.89C80.1472 115.609 96.0791 114.537 112.817 112.816C129.087 111.144 141.603 108.026 159.244 102.56C177.704 96.8403 186.967 93.9964 204.419 86.3858C214.17 82.1336 229.3 72.8319 229.3 72.8319C229.3 72.8319 249.568 50.2668 250.239 48.8265"
                    stroke="#FFA3A4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
          <p>
            Product designer with +4 years of experience. Working on end to end
            design process, from discovery to delivery. Strategy focused and
            always in search for the right problems to solve.
          </p>
          <ul>
            <li>
              💡 empowering commerce at{' '}
              <a href="https://olist.com/" target="_blank" rel="noreferrer">
                olist
              </a>
            </li>
            <li>📌 living in São Paulo, Brazil</li>
            <li>
              🎧 listening to this{' '}
              <a
                href="https://open.spotify.com/playlist/4HFHFdf76F4kq5zpJ2ScIM"
                target="_blank"
                rel="noreferrer"
              >
                playlist
              </a>
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

      <GoTotopButton />
    </main>
  )
}
