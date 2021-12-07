import { FC } from 'react'
import { IRepository } from '../../models/Repository'

export interface ITopicsProps {
  topics: IRepository
}

export interface IRepositoryProps {
  item: IRepository
}

export interface ISelect {
  [key: string]: boolean
}

export interface IDataType {
  [key: string]: string
}

export interface ILanguageClass {
  [key: string]: string
}

export interface IFilterFunction {
  [key: string]: (key: string) => void
}

export const languageClass: ILanguageClass = {
  TypeScript: 'blue-ball',
  JavaScript: 'yellow-ball',
  Ruby: 'red-ball',
  Java: 'orange-ball',
  HTML: 'orange-two-ball',
  Elixir: 'purple-ball',
  Tex: 'green-ball',
  CSS: 'purple-ball',
  C: 'orange-ball',
  Python: 'blue-ball',
  'Objective-C': 'orange-ball',
  'C#': 'green-ball'
}

export const optionInitialState = {
  type: 'All',
  language: 'All',
  sort: 'Last updated'
}

export const selectInitialState = {
  type: false,
  language: false,
  sort: false
}

export const filters = ['type', 'language', 'sort']

export const typeOptions = ['All', 'Sources', 'Forks', 'Archived', 'Mirrors']

export const sortOptions = ['Last updated', 'Name', 'Stars']

export const options:any = {
  type: typeOptions,
  sort: sortOptions,
  initialState: optionInitialState,
  select: selectInitialState,
}

export const getLanguageList = (repositories: any[]): string[] => {
  const languageList: string[] = ['All']
  repositories.forEach((item: any) => {
    if (!languageList.includes(item.language) && item.language) {
      languageList.push(item.language)
    }
  })
  return languageList
}
