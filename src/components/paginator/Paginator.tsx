import React from 'react'
import { IPaginatorProps } from '.';
import { ITEMS_PER_PAGE } from '../../constants/Paginator';
import './Paginator.scss';


export const Paginator: React.FC<IPaginatorProps> = ({ data = [], setData = (): void => { } }) => {
  return (
    <div className="d-flex justify-content-center gap-2 paginator">
      <div className="d-flex paginator__controls ">
        <button className="py-1 paginator__control px-2 bold paginator__control-disabled">Previous</button>
        <button className="py-1 paginator__control px-2 bold">Next</button>
      </div>
    </div>
  )
}
