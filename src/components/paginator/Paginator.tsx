import React, { useState, useEffect } from 'react'
import { IPaginatorProps } from '.';
import { ITEMS_PER_PAGE } from '../../constants/Paginator';
import './Paginator.scss';


export const Paginator: React.FC<IPaginatorProps> = ({ data = [], setData = (): void => { } }) => {

  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setPages(Math.ceil(data.length / ITEMS_PER_PAGE))
  }, [data])

  useEffect(() => {
    changeData()
  }, [currentPage, pages])

  const changeData = () => {
    const startLimit = (ITEMS_PER_PAGE * currentPage) - ITEMS_PER_PAGE;
    setData(data.slice(startLimit, startLimit + ITEMS_PER_PAGE))
  }

  const nextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <div className="d-flex justify-content-center gap-2 paginator">
      <div className="d-flex paginator__controls">
        <button
          className={`py-1 paginator__control previous px-3 bold paginator__control${currentPage === 1 ? '-disabled' : ''}`}
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous</button>
        <button
          className={`py-1 paginator__control next px-3 bold paginator__control${currentPage === pages ? '-disabled' : ''}`}
          onClick={nextPage}
          disabled={currentPage === pages}
        >
          Next</button>
      </div>
    </div>
  )
}
