import React from 'react'
import { FOOTER__ITMES } from '../../utils/data'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="d-flex align-items-center">
      <div className="footer d-flex align-items-center gap-5">
        <div className="footer__cophy d-flex align-items-center gap-2">
          <i className="fab fa-github footer__cophy-icon" />
          <span className="footer__cophy-text">© 2021 GitHub, Inc.</span>
        </div>
        <div className="footer__links d-flex gap-5">
          {FOOTER__ITMES.map((item) => (
            <a href={item.url} className='footer__links-text' target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
