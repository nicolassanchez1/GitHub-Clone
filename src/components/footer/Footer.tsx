import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER__ITEMS } from '../../utils/data'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="d-flex align-items-center mt-2">
      <div className="footer d-flex align-items-center flex-wrap">
        <div className="footer__cophy d-flex align-items-center gap-2">
          <i className="fab fa-github footer__cophy-icon" />
          <span className="footer__cophy-text">© 2021 GitHub, Inc.</span>
        </div>
        <div className="footer__links d-flex flex-wrap">
          {FOOTER__ITEMS.map((item, index:number) => (
            <a key={index} href={item.url} className='footer__links-text' target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
