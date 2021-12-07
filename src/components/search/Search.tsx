
import React, { useEffect } from 'react'
import { ISearchProps, changeInputSize } from './'
import './Search.scss'

export const Search: React.FC<ISearchProps> = ({
  placeholder = '',
  className = '',
  name = '',
  search = false,
  handleChange = () => { },
  handleClick = () => { },
  value = '',
  id = ''
}) => {

  useEffect(() => {
    if (id) document.addEventListener('click', (e) => changeInputSize(e, id))
  }, [])

  const handleClickInput = ({ target }: any, id: string) => {
    if (id && !target.classList.contains('input-icon')) {
      const input: any = document.querySelector(`#${id}`);
      input.style.width = '400px'
    }
  }
  
  const restProps = { value, name, className, id, placeholder, onChange: handleChange }

  return (
    <div className="position-relative d-flex justify-content-between" onClick={(e) => handleClickInput(e, id)}>
      <input
        type="text"
        {...restProps}
      />
      {search && <i className="input-icon fas fa-search search-icon" onClick={handleClick} />}
    </div>
  )
}
