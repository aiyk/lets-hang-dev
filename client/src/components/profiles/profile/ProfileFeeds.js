import React from 'react'
import Feed from '../../reusables/Feed'

export default function ProfileFeeds({profile}) {
  return (
    <div className="feeds-wrap">
      <div className="tab-title">Feeds</div>
      <div className="feeds">
        <Feed profile={profile} />
        <Feed profile={profile}  />
        <Feed profile={profile}  />
        <Feed profile={profile}  />
      </div>
    </div>
  )
}
