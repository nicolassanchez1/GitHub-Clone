import React, { useEffect, useState, useMemo } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import Repository from './Repository'
import { InputEvent } from '../search'
import { IRepository } from '../../models/Repository'
import { lowerCase } from '../../utils/text'
import { createOptions } from '../../utils/select'
import { options, ISelect, getLanguageList, filters, IDataType, IFilterFunction } from '.'
import { Paginator, Select, Search } from '../'
import {
  filterArray,
  propertyToDate,
  sortArray
} from '../../utils/array'
import './Repositories.scss'

const Repositories = () => {
  const { repositories } = useSelector((state: RootStateOrAny) => state.user)
  const [userRepository, setUserRepository] = useState<string>('')
  const [data, setData] = useState<IRepository[]>([])
  const [select, setSelect] = useState<ISelect>(options.select)
  const [option, setOption] = useState(options.initialState)

  useEffect(() => setData(repositories), [repositories])


  const filterByOrder = (order: string) => {
    const keys: IDataType = {
      'Last updated': 'updated_at',
      Name: 'name',
      Stars: 'stargazers_count'
    }
    const array = order === 'Last updated' ? propertyToDate(data, keys[order]) : data
    setData(sortArray(array, keys[order], order === 'Name'))
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
    if (value === 'All') return setData(repositories)
    filterRepositories(name, value)
  }

  const filterRepositories = (type: string, key: string) => {
    const filterFunction: IFilterFunction = {
      sort: filterByOrder,
      type: filterByType,
      language: filterByLanguage
    }
    filterFunction[type](key)
  }

  const toggleOption = (name: string) => {
    setSelect({ ...options.select, [name]: !select[name] })
  }

  const languageList = useMemo(() => createOptions(getLanguageList(repositories)), [repositories])

  const selectProps = (name: string) => ({
    name,
    selectOption: handleChangeOption,
    setShowOptions: toggleOption,
    options: name === 'language' ? languageList : createOptions(options[name]),
    value: option[name],
    showOptions: select[name],
  })

  return (
    <div className="repo position-relative">
      <div className="repo__search d-flex align-items-center gap-2 flex-wrap">
        <Search
          placeholder="Find a repository..."
          className="form-control repo-input"

          value={userRepository}
          name="user"
          handleChange={handleChange}
          handleClick={() => { }}
        />
        <div className="d-flex gap-1">
          {filters?.map(filter => (
            <Select key={filter} {...selectProps(filter)} />
          ))}
        </div>
      </div>
      {(option.type !== 'All' || option.language !== 'All') && (
        <p className="text-white repository-line text-md py-3">
          <span className="font-weight-bold">{data.length} </span>result{data.length === 1 ? '' : 's'}  sorted by {lowerCase(option.sort)}
        </p>
      )}
      {data.map((item: IRepository) => (
        <Repository key={item.id} item={item} />
      ))}
      <Paginator {...{ data, setData }} />
    </div>
  )
}

export default Repositories


// import React, { useEffect, useState, useMemo } from 'react'
// import { RootStateOrAny, useSelector } from 'react-redux'
// import Search from '../search/Search'
// import Repository from './Repository'
// import Select from '../select/Select'
// import { InputEvent } from '../search'
// import { IRepository } from '../../models/Repository'
// import { lowerCase } from '../../utils/text'
// import { createOptions } from '../../utils/select'
// import { options, ISelect, getTopics, filters, IDataType, IFilterFunction } from '.'
// import {
//   filterArray,
//   propertyToDate,
//   sortArray
// } from '../../utils/array'
// import './Repositories.scss'

// const Repositories = () => {
//   const { repositories } = useSelector((state: RootStateOrAny) => state.user)
//   const [userRepository, setUserRepository] = useState<string>('')
//   const [data, setData] = useState<IRepository[]>([])
//   const [select, setSelect] = useState<ISelect>(options.select)
//   const [option, setOption] = useState(options.initialState)

//   useEffect(() => setData(repositories), [repositories])


//   const filterByOrder = (order: string) => {
//     const keys: IDataType = {
//       'Last updated': 'updated_at',
//       Name: 'name',
//       Stars: 'stargazers_count'
//     }
//     const array = order === 'Last updated' ? propertyToDate(data, keys[order]) : data
//     setData(sortArray(array, keys[order], order === 'Name'))
//   }

//   const filterByType = (type: string) => {
//     if (type === 'All') return setData(repositories)
//     const keys: IDataType = {
//       Sources: 'sources',
//       Forks: 'fork',
//       Archived: 'archived',
//       Mirrors: 'mirrors'
//     }
//     setData(filterArray(repositories, keys[type]))
//   }

//   const filterByLanguage = (language: string) => {
//     setData(
//       repositories.filter((item: IRepository) =>
//         item.language?.includes(language)
//       )
//     )
//   }

//   const handleChange = ({ target }: InputEvent) => {
//     setUserRepository(target.value)
//     if (target.value) {
//       const filteredData = data.filter((item: IRepository) =>
//         lowerCase(item.name).includes(lowerCase(target.value))
//       )
//       setData(filteredData)
//     } else {
//       setData(repositories)
//     }
//   }

//   const handleChangeOption = (name: string, value: string) => {
//     setOption({ ...option, [name]: value })
//     if (value === 'All') return setData(repositories)
//     filterRepositories(name, value)
//   }

//   const filterRepositories = (type: string, key: string) => {
//     const filterFunction: IFilterFunction = {
//       sort: filterByOrder,
//       type: filterByType,
//       language: filterByLanguage
//     }
//     filterFunction[type](key)
//   }

//   const toggleOption = (name: string) => {
//     setSelect({ ...options.select, [name]: !select[name] })
//   }

//   const topicList = useMemo(() => createOptions(getTopics(repositories)), [repositories])

//   const selectProps = (name: string) => ({
//     name,
//     selectOption: handleChangeOption,
//     setShowOptions: toggleOption,
//     options: name === 'language' ? topicList : createOptions(options[name]),
//     value: option[name],
//     showOptions: select[name],
//   })

//   return (
//     <div className="repo position-relative">
//       <div className="repo__search d-flex align-items-center gap-2 flex-wrap">
//         <Search
//           placeholder="Find a repository..."
//           className="form-control repo-input"
//           search=""
//           value={userRepository}
//           name="user"
//           handleChange={handleChange}
//           handleClick={() => { }}
//         />
//         <div className="d-flex gap-1">
//           {filters?.map(filter => (
//             <Select key={filter} {...selectProps(filter)} />
//           ))}
//         </div>
//       </div>
//       {(option.type !== 'All' || option.language !== 'All') && (
//         <p className="text-white repository-line text-md py-3">
//           <span className="font-weight-bold">{data.length} </span>result{data.length === 1 ? '' : 's'}  sorted by {lowerCase(option.sort)}
//         </p>
//       )}
//       {data.map((item: IRepository) => (
//         <Repository key={item.id} item={item} />
//       ))}
//     </div>
//   )
// }

// export default Repositories
