import { v4 as uuid } from 'uuid'

export const createOptions = (options: string[]) =>
  options.map((option) => ({
    id: uuid(),
    value: option
  }))
