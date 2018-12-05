import React from 'react'
import user from '../../assets/users/1.jpg'

export default function Feed({person}) {
  return (
    <div className="feed">
        <div className="feed-head">
        <div className="feed-head-lhs">
        <div className="user-data">
            <div className="user-loggedin">
                <img src={user} alt="user" />
            </div>
            <div className="user-name">
                <div>{person.firstname} {person.lastname}</div>
                <span>{person.profession}</span>
            </div>
        </div>
        </div>
        <div className="feed-head-rhs">
            <div className="feed-date">
            <div>{person.feedRight1}</div> 
            <div>{person.feedRight2}</div>
            </div>
        </div>
        </div>

        <div className="feed-content">{person.quote}</div>
    </div>
  )
}
