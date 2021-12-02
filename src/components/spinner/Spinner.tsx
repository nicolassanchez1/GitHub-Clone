import React from 'react'
import './Spiner.scss'

const Spinner = () => {
  return (
    <div className="spinner d-flex justify-content-center align-items-center">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  )
}

export default Spinner
