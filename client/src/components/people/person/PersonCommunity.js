import React from 'react'
import StripList from '../../reusables/StripList'

export default function PersonCommunity() {
  return (
    <div className="feeds-wrap">
      <div className="community">
        <div className="community-header">
          <div className="tab-title">Followers (700)</div>
          <div className="community-head-cta">View All</div>
        </div>
        <StripList />
      </div>

      <div className="community">
        <div className="community-header">
          <div className="tab-title">Following (200)</div>
          <div className="community-head-cta">View All</div>
        </div>
        <StripList />
      </div>
    </div>
  )
}
