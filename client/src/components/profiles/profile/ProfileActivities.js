import React from 'react'
import Feed from '../../reusables/Feed'

export default function ProfileActivities({profile}) {
  return (
    <div className="feeds-wrap">
      <div className="tab-title">Activities</div>
      <div className="feeds">
        <Feed profile={profile} />
        <Feed profile={profile} />
        <Feed profile={profile} />
        <Feed profile={profile} />
      </div>
    </div>
  )
}
