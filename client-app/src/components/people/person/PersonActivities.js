import React from 'react'
import Feed from '../../reusables/Feed'

export default function PersonActivities({feed}) {
  return (
    <div className="feeds-wrap">
      <div className="tab-title">Activities</div>
      <div className="feeds">
        <Feed person={feed} />
        <Feed person={feed} />
        <Feed person={feed} />
        <Feed person={feed} />
      </div>
    </div>
  )
}
