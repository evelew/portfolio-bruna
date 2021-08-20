import { useEffect, useState } from 'react'

import ArrowButtonSvg from 'public/icons/arrow-button.svg'

import s from './styles.module.scss'

const GoTotopButton = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset

      if (scrollPosition <= window.innerHeight / 2) {
        setOpacity(0)
      } else {
        setOpacity(1)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`container ${s.wrapper}`}
      style={{
        opacity: opacity
      }}
    >
      <button className={s.button} onClick={scrollToTop}>
        <ArrowButtonSvg />
      </button>
    </div>
  )
}

export default GoTotopButton
