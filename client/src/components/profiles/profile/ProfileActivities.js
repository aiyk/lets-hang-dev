import React from 'react'
import Feed from '../../reusables/Feed'

export default function ProfileActivities({feed}) {
  return (
    <div className="feeds-wrap">
      <div className="tab-title">Activities</div>
      <div className="feeds">
        <Feed profile={feed} />
        <Feed profile={feed} />
        <Feed profile={feed} />
        <Feed profile={feed} />
      </div>
    </div>
  )
}
