import React from 'react'
import { IButtonProps } from './'
import './Button.scss'

const Button: React.FC<IButtonProps> = ({
  text = '',
  onClick = (): void => {}
}) => {
  return (
    <button className="button-repo" onClick={onClick}>
      {text}
      <i className="fas fa-caret-down icon__down-repo" />
    </button>
  )
}

export default Button
