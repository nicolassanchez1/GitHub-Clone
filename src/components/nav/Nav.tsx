import React from 'react';
import { NAV__ITEMS } from '../../utils/data';
import './Nav.scss';

const Nav = () => {
  
  window.addEventListener('scroll', function () {
    const nav = this.document.querySelector('nav')
    nav?.classList.toggle("sticky", window.scrollY > 80)
  });

  return (
    <div className="nav_box d-flex justify-content-center align-items-end ">
      <nav className="nav d-flex justify-content-center align-items-center gap-4">
        {NAV__ITEMS.map((item, index) => (
          <div
            key={index}
            className={`nav__content d-flex gap-2  align-items-center ${
              item.active === true && 'activeContent'
            } `}>
            <i className={item.icon} />
            <span
              className={`nav__content-textNav ${item.active ? 'bold' : ''}`}>
              {item.name}
            </span>
          </div>
        ))}
      </nav>
    </div>
  )
}
export default Nav;
