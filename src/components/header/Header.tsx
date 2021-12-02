// import React, { useState } from 'react'
// import { HEADER__ITEMS } from '../../utils/data'
// import Search from '../search/Search'
// import './Header.scss'

// const Header = () => {

//     const [userName, setUserName] = useState<string>('')

//   return (
//   <header className="header d-flex justify-content-between align-items-center">
//     <div className="header__navigation d-flex align-items-center gap-3">
//       <i className="fab fa-github text-white" />
//       <div>
//         <Search
//           placeholder="Search or jump to..."
//           className="form-control header-input"
//           search="fas fa-search"
//           name='user'
//         />
//       </div>
//       {HEADER__ITEMS.map((item) => (
//         <span key={item.id} className="header__navigation-textItem">
//           {item.name}
//         </span>
//       ))}
//     </div>

//     <div className="d-flex align-items-center gap-4">
//       {HEADER__ITEMS.map((item) => (
//         <span key={item.id} className={item.icon}>
//           <i className={item.iconArrowDown} />
//         </span>
//       ))}
//     </div>
//   </header>

// )};

// export default Header;

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getReporitories, getUser } from '../../redux/actions/user'
import { HEADER__ITEMS } from '../../utils/data'
import { InputEvent } from '../search/'
import Search from '../search/Search'
import Spinner from '../spinner/Spinner'

import './Header.scss'

const Header = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState<string>('')

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
        <div className="d-flex align-items-center gap-4">
          {HEADER__ITEMS.map((item) => (
            <span key={item.id} className={item.icon}>
              <i className={item.iconArrowDown} />
            </span>
          ))}
        </div>
      </header>
      {loading && <Spinner />}
    </>
  )
}

export default Header
