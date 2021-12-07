import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getReporitories, getUser } from '../../redux/actions/user'
import { HEADER__ITEMS } from '../../utils/data'
import { InputEvent } from '../search/'
import Search from '../search/Search'
import Spinner from '../spinner/Spinner'
import './Header.scss'

const Header = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState<string>('')
  const { profile } = useSelector((state: RootStateOrAny) => state.user)
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target }: InputEvent) => {
    setUserName(target.value)
  }
  const handleClick = async () => {
    setLoading(true)
    await Promise.all([
      dispatch(getUser(userName)),
      dispatch(getReporitories(userName))
    ])
    setLoading(false)
    setUserName('')
  }

  return (
    <>
      <header className="header d-flex justify-content-between align-items-center">
        <div className="header__main-mobile d-none">
          <i className="fas fa-bars text-white" />
        </div>
        <div className="header__logo-mobile d-none">
          <i className="fab fa-github text-white" />
        </div>

        <div className="header__navigation d-flex align-items-center gap-3">
          <i className="fab fa-github text-white" />
          <div>
            <Search
              placeholder="Search or jump to..."
              className="form-control header-input"
              search="fas fa-search"
              name="user"
              value={userName}
              handleChange={handleChange}
              handleClick={handleClick}
            />
          </div>
          {HEADER__ITEMS.map((item) => (
            <span key={item.id} className="header__navigation-textItem">
              {item.name}
            </span>
          ))}
        </div>

        <div className="header__main-notification d-none">
          <i className="far fa-bell text-white" />
        </div>
        <div className="header__notification d-flex align-items-center gap-4">
          {HEADER__ITEMS.map((item) => (
            <span
              key={item.id}
              className={`${item.icon} d-flex align-items-center header__profile`}>
              <i className={item.iconArrowDown} />
            </span>
          ))}
          <div className="img__profile position-relative d-flex ">
            <img
              src={profile.avatar_url}
              className="img__profile-header"
              alt=""
            />
            <i className="fas fa-circle img__profile-circle"></i>
            <i className="fas fa-caret-down text-white" />
          </div>
        </div>
      </header>
      {loading && <Spinner />}
    </>
  )
}

export default Header
