import React from 'react'
import Button from '../button-repo/Button'
import Topics from './Topics'
import { parseDate } from '../../utils/date'
import { IRepositoryProps, languageClass } from '.'
import './Repositories.scss'

const Repository: React.FC<IRepositoryProps> = ({ item }) => {
  return (
    <div className="repositories d-flex align-items-center justify-content-between">
      <div className="repositories__info d-flex flex-column">
        <a href={item.html_url} className="repositories__info-title">
          {item.name}<span className="repositories__info-public">public</span>
        </a>
        {item.description && (
          <span className="repositories__info-descrip">{item.description}</span>
        )}

        {item.topics ? (
          <div className="topics d-flex flex-wrap">
            {item.topics.map((topics: any, index: number) => (
              <Topics key={index} topics={topics} />
            ))}
          </div>
        ) : null}

        <div className="repositories__info-repo d-flex flex-wrap">
          {item.language && (
            <>
              <span className={languageClass[item.language]} />
              <span className="mx-1">{item.language}</span>
            </>
          )}

          {item.stargazers_count ? (
            <span className="mx-2">
              <i className="far fa-star" /> {item.stargazers_count}
            </span>
          ) : null}
          {item.license?.name ? (
            <span className="mx-2">
              <i className="fas fa-balance-scale" /> {item.license?.name}
            </span>
          ) : null}
          <span className="">Updated on {parseDate(item.updated_at)}</span>
        </div>
      </div>
      <div className="repositories__button d-flex flex-column justify-content-center align-items-end mt-3">
        <Button text="Star" />
        <img className='repositories__graph' src="https://i.ibb.co/ZBJd2xk/grafica.png" alt="grafica" />
      </div>
    </div>
  )
}

export default Repository
