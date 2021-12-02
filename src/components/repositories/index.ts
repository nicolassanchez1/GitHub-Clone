import { IRepository } from '../../models/Repository'

export interface ITopicsProps{
  topics: IRepository
}

export interface IRepositoryProps {
  item: IRepository
}

interface ILanguageClass {
  [key: string]: string
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
  'Objective-C' : 'orange-ball',
  'C#' : 'green-ball'
}
