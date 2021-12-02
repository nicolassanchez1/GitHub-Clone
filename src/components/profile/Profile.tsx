import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import './Profile.scss'

function Profile() {
  // const {profile} = useSelector(state => state.user)
  const { profile } = useSelector((state: RootStateOrAny) => 
     state.user
  )
  const { avatar_url, name, login, bio, followers, following, company, location, blog } = profile

  return (
    <div className="profile d-flex flex-column">
      <img className="profile__img" src={avatar_url} alt="" />
      <h2 className="profile__name">{name}</h2>
      <span className="profile__github">{login}</span>
      <button className="profile__btn">Follow</button>
      <span className="profile__job">{bio}</span>
      <div className="profile__follow d-flex gap-1">
        <div className="">
          <i className="fas fa-users text-followers" />
          <span className="number-followers"> {followers} </span>
          <span className="text-followers">followers</span>
        </div>
        <span className="text-white">·</span>
        <div className="following">
          <span className="number-followers"> {following} </span>
          <span className="text-followers">following</span>
        </div>
        <span className="text-white">·</span>
        <div className="starts">
          <i className="far fa-star text-followers"></i>
          <span className="number-followers"> 36 </span>
        </div>
      </div>

      <div className="profile__info d-flex flex-column gap-1">
        <div className="profile__info-company d-flex align-items-center gap-2">
          <i className="far fa-building color-second" />
          <span className="text__info-profile bold">{company}</span>
        </div>
        <div className="profile__info-location d-flex align-items-center gap-2">
          <i className="fas fa-map-marker-alt color-second" />
          <span className="text__info-profile px-1">{location}</span>
        </div>
        <div className="profile__info-email d-flex align-items-center gap-2">
          <i className="far fa-envelope color-second"></i>
          <span className="text__info-profile">test@test.com</span>
        </div>
        <div className="profile__info-link d-flex align-items-center gap-2">
          <i className="fas fa-link color-second" />
          <span className="text__info-profile">{blog}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
