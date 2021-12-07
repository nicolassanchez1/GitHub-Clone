import { Dispatch, SetStateAction } from 'react'
import { IRepository } from '../../models/Repository'

export interface IPaginatorProps {
  data: IRepository[]
  setData: Dispatch<SetStateAction<IRepository[]>>
}
