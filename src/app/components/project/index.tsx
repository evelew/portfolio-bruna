import Image from 'next/image'


import s from './styles.module.scss'

const Project = ({
  title = String(),
  text = String(),
  link = String(),
  image = Object(),
  tags = Array(),
  inverted = Boolean()
}) => {
  return (
    <article
      className={`${s.project} ${inverted ? s['project--inverted'] : ''} `}
    >
      <div className={`${s.image} ${inverted ? s['image--inverted'] : ''}`}>
        <Image src={image.src} alt={image.alt} width={580} height={435} />
      </div>

      <div
        className={`${s.content} ${inverted ? s['content--inverted'] : ''} `}
      >
        <h2 className={s.title}>
          <a href={link} target="_blank" rel="noreferrer">
            <span>{title}</span>
          </a>
          <Image src="/icons/arrow.svg" alt="arrow icon" width={24} height={24} />
        </h2>

        <p className={s.text}>{text}</p>

        <div className={s.tags}>
          {tags.map((tag, i) => (
            <span className={s.tag} key={i}>
              {tag}
            </span>
          ))}
        </div>
      </div >
    </article >
  )
}

export default Project
