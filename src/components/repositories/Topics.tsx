import React from 'react'
import { ITopicsProps } from '.'
import './Repositories.scss'

const Topics:React.FC<ITopicsProps> = ({ topics }) => {
  return <span className="topic">{topics}</span>
}

export default Topics
