// import React, { useState, ChangeEvent } from 'react'
// import { ISearchProps } from './'
// import './Search.scss'

// const Search: React.FC<ISearchProps> = ({
//   placeholder = '',
//   className = '',
//   name = '',
//   search = '',
//   handleChange= () => {},
//   handleClick= () => {},
//   value = ''
// }) => {

//   return (
//     <>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className={className}
//         name={name}
//         value={value}
//         onChange={handleChange}
//       />
//       {search !== '' && <i className={search} onClick={handleClick}></i>}
//     </>
//   )
// }

// export default Search

import React, { useState, ChangeEvent } from 'react'
import { ISearchProps } from './'
import './Search.scss'

const Search: React.FC<ISearchProps> = ({
  placeholder = '',
  className = '',
  name = '',
  search = '',
  handleChange = () => {},
  handleClick = () => {},
  value = ''
}) => {
  return (
    <div className="position-relative">
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {search !== '' && <i className={`input-icon ${search}`} onClick={handleClick}/>}
    </div>
  )
}

export default Search
