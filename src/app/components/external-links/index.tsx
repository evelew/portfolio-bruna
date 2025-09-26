import Image from 'next/image'

import s from './styles.module.scss'

const ExternalLinks = () => {
  const links = [
    {
      name: 'Medium',
      href: 'https://medium.com/@bruna.freitas'
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/brunasfreitas/'
    },
    {
      name: 'Resume',
      href: 'https://drive.google.com/file/d/179p4JV-W1vQqSn6n7qK-YN5JHxOfCg40/view?usp=sharing'
    }
  ]

  return (
    <section className={s['external-links']}>
      <div className="container">
        <ul className={s.list}>
          {links.map(({ name, href }) => (
            <li className={s['list-item']} key={name}>
              <a
                className={s.link}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{name}</span>
                <Image src="/icons/arrow.svg" alt="arrow icon" width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExternalLinks
