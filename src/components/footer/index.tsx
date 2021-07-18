import s from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <span className={s.year}>2021</span>
        <p className={s.text}>
          designed by me, coded by{' '}
          <a
            href="https://www.linkedin.com/in/evellyn-lima/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            evellyn lima
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
