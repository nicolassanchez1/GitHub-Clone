import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { NAV__ITEMS } from '../../utils/data';
import './Nav.scss';

const Nav = () => {

  const { repositories } = useSelector((state: RootStateOrAny) => state.user)

  return (
    <div className="nav_box d-flex justify-content-center align-items-end ">
      <nav className="nav d-flex justify-content-lg-center justify-content-md-end  align-items-center gap-2">
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
            {item.active === true && <span className='nav__content-number'>{repositories.length}</span>}
            </span>
          </div>
        ))}
      </nav>
    </div>
  )
}
export default Nav;
