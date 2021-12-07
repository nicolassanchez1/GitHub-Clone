import React from 'react'
import { capitalCase } from '../../utils/text'
import {ISelectProps} from './'
import Button from '../button-repo/Button'
import './Select.scss'

const Select: React.FC<ISelectProps> = ({
  options = [],
  value = '',
  name = '',
  showOptions = false,
  setShowOptions = (): void => {},
  selectOption = (): void => {}
}) => {
  const handleChangeOption = (value: string) => {
    selectOption(name, value)
    setShowOptions(name)
  }

  return (
    <div className="position-relative select">
      <Button text={capitalCase(name)} onClick={() => setShowOptions(name)} />
      {showOptions && (
        <div className="select__options position-absolute text-white">
          <div className="select__option d-flex justify-content-between px-3 py-2 align-items-center">
            <span>Select {name} </span>
            <span onClick={() => setShowOptions(name)}>X</span>
          </div>
          {options?.map((option) => (
            <div
              key={option.id}
              className="select__option d-flex px-4 py-2 align-items-center gap-2"
              onClick={() => handleChangeOption(option.value)}>
              {value === option.value && <i className="fas fa-check text-sm" />}
              <span>{option.value} </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
