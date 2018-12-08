import React from 'react'
import Feed from '../../reusables/Feed'

export default function ProfileFeeds({feed}) {
  return (
    <div className="feeds-wrap">
      <div className="tab-title">Feeds</div>
      <div className="feeds">
        <Feed profile={feed} />
        <Feed profile={feed}  />
        <Feed profile={feed}  />
        <Feed profile={feed}  />
      </div>
    </div>
  )
}
