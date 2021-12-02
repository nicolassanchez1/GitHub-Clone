import React from 'react'
import { IButtonProps } from './'
import './Button.scss'

const Button: React.FC<IButtonProps> = ({ name }) => {
  return <button className='button-repo'>{name}<i className="fas fa-caret-down icon__down-repo"/></button>
}

export default Button
