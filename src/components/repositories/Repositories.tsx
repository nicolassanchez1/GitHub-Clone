import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import Search from '../search/Search'
import Repository from './Repository'
import Select from '../select/Select'
import { InputEvent } from '../search'
import { IRepository } from '../../models/Repository'
import { lowerCase } from '../../utils/text'
import { createOptions } from '../../utils/select'
import { options, ISelect, getTopics, IDataType } from '.'
import { filterArray, sortArray } from '../../utils/array'
import './Repositories.scss'

const Repositories = () => {
  const { repositories } = useSelector((state: RootStateOrAny) => state.user)
  const [userRepository, setUserRepository] = useState<string>('')
  const [data, setData] = useState<IRepository[]>([])
  const [select, setSelect] = useState<ISelect>(options.select)
  const [option, setOption] = useState(options.initialState)

  useEffect(() => setData(repositories), [repositories])

  useEffect(() => {
    if (option.language) filterByLanguage(option.language)
  }, [option.language])

  useEffect(() => {
    if (option.type) filterByType(option.type)
  }, [option.type])

  useEffect(() => {
    if (option.sort) filterByOrder(option.sort)
  }, [option.sort])

  const filterByOrder = (order: string) => {
    if (order === 'All') return setData(repositories)
    const keys: IDataType = {
      'Last updated': 'updated_at',
      Name: 'name',
      Stars: 'stargazers_count'
    }
    const orderList = order === 'Name'

    setData(
      sortArray(repositories, keys[order], order.includes('updated'), orderList)
    )
  }

  const filterByType = (type: string) => {
    if (type === 'All') return setData(repositories)
    const keys: IDataType = {
      Sources: 'sources',
      Forks: 'fork',
      Archived: 'archived',
      Mirrors: 'mirrors'
    }
    setData(filterArray(repositories, keys[type]))
  }

  const filterByLanguage = (language: string) => {
    if (language === 'All') return setData(repositories)
    setData(
      repositories.filter((item: IRepository) =>
        item.language?.includes(language)
      )
    )
  }

  const handleChange = ({ target }: InputEvent) => {
    setUserRepository(target.value)
    if (target.value) {
      const filteredData = data.filter((item: IRepository) =>
        lowerCase(item.name).includes(lowerCase(target.value))
      )
      setData(filteredData)
    } else {
      setData(repositories)
    }
  }

  const handleChangeOption = (name: string, value: string) => {
    setOption({ ...option, [name]: value })
  }

  const toggleOption = (name: string) => {
    setSelect({ ...options.select, [name]: !select[name] })
  }

  return (
    <div className="repo position-relative">
      <div className="repo__search d-flex align-items-center gap-2 flex-wrap">
        <Search
          placeholder="Find a repository..."
          className="form-control repo-input"
          search=""
          value={userRepository}
          name="user"
          handleChange={handleChange}
          handleClick={() => {}}
        />
        <div className="d-flex gap-1">
          <Select
            name="type"
            selectOption={handleChangeOption}
            setShowOptions={toggleOption}
            options={createOptions(options.type)}
            value={option.type}
            showOptions={select.type}
          />
          <Select
            name="language"
            selectOption={handleChangeOption}
            setShowOptions={toggleOption}
            options={createOptions(getTopics(repositories))}
            value={option.language}
            showOptions={select.language}
          />
          <Select
            name="sort"
            selectOption={handleChangeOption}
            setShowOptions={toggleOption}
            options={createOptions(options.sort)}
            value={option.sort}
            showOptions={select.sort}
          />
        </div>
      </div>

      {data.map((item: IRepository) => (
        <Repository key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Repositories
