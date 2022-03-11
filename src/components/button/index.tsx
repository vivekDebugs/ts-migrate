import React, { MouseEventHandler } from 'react'
import { default as styles } from './style.module.css'

interface IProps {
  onClick: MouseEventHandler
  backgroundColor: string
  color: string
}

const Button: React.FC<IProps> = ({
  onClick,
  backgroundColor,
  color,
}): React.ReactElement => {
  return (
    <button
      className={styles.primaryButton}
      style={{ background: `${backgroundColor}`, color: `${color}` }}
      onClick={onClick}
    >
      Button
    </button>
  )
}

export default Button
