import React from 'react'
import isEmpty from '../../validation/is-empty'

export default function Feed({profile}) {
  return (
    <div className="feed">
        <div className="feed-head">
        <div className="feed-head-lhs">
        <div className="user-data">
            <div className="user-loggedin">
                <img src={profile.avatar} alt={profile.firstname} />
            </div>
            <div className="user-name">
                <div>{profile.firstname} {profile.lastname}</div>
                <span>{profile.profession}</span>
            </div>
        </div>
        </div>
        <div className="feed-head-rhs">
            <div className="feed-date">
            <div>{profile.feedRight1}</div> 
            <div>{profile.feedRight2}</div>
            </div>
        </div>
        </div>

        <div className="feed-content">{profile.quote}</div>
    </div>
  )
}
