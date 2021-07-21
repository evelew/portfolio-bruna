import ArrowButtonSvg from 'public/icons/arrow-button.svg'

import s from './styles.module.scss'

const GoTotopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`container ${s.wrapper}`}>
      <button className={s.button} onClick={scrollToTop}>
        <ArrowButtonSvg />
      </button>
    </div>
  )
}

export default GoTotopButton
