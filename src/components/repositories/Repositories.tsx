import React, { useEffect, useState } from 'react';
import Search from '../search/Search';
import Button from '../button-repo/Button';
import Repository from './Repository';
import { InputEvent } from '../search';
import { RootStateOrAny, useSelector } from 'react-redux';
import { IRepository } from '../../models/Repository';
import './Repositories.scss';

const Repositories = () => {
  const { repositories } = useSelector((state: RootStateOrAny) => state.user)

  const [userRepository, setUserRepository] = useState('')
  const [data, setData] = useState([])

  useEffect(() => setData(repositories), [repositories])

  const handleChange = ({ target }: InputEvent) => {
    setUserRepository(target.value)
    if (target.value) {
      const filterData = data.filter((item: IRepository) => {
        if (item.name.includes(target.value)) {
          return true
        } else {
          return false
        }
      })
      setData(filterData)
      console.log('Nueva Data', filterData)
    } else {
      setData(repositories)
    }
  }
  const handleClick = () => {}

  return (
    <>
      <div className="repo position-relative">
        <div className="repo__search d-flex align-items-center gap-4">
          <Search
            placeholder="Find a repository..."
            className="form-control repo-input"
            search=""
            value={userRepository}
            name="user"
            handleChange={handleChange}
            handleClick={handleClick}
          />
          <div className="d-flex gap-1">
            <Button name="Type" />
            <Button name="Language" />
            <Button name="Sort" />
          </div>
        </div>

        {data
          .map((item: IRepository) => <Repository key={item.id} item={item} />)
          .sort()}
      </div>
    </>
  )
}

export default Repositories
