import React from 'react'
import Feed from '../../reusables/Feed'

export default function PersonFeeds({feed}) {
  return (
    <div className="feeds-wrap">
      <div className="tab-title">Feeds</div>
      <div className="feeds">
        <Feed person={feed} />
        <Feed person={feed}  />
        <Feed person={feed}  />
        <Feed person={feed}  />
      </div>
    </div>
  )
}
