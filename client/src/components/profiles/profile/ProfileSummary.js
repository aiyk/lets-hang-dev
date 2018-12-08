import React from 'react'
import userimage from '../../../assets/users/2.jpg'

export default function ProfileSummary({profile}) {
  return (
    <div className="profile-summary nice nice-scroll">
        <div className="profile-img">
            <img src={userimage} alt="profile" />
        </div>
        <div className="profile-data">
            <div className="profile-top">
            <div className="profile-name">{profile.firstname} {profile.lastname}</div>
            <div className="profile-top-actions">
                <div className="btn btn-x1 btn-hollow-border-white btn-rounded">follow</div>
            </div>
            </div>
            <div className="profile-quote">
                <span>{profile.quote}</span>
                <div className="btn btn-x1 btn-hollow-border-white btn-rounded">Request Meeting</div>
            </div>
            <div className="profile-stats">
                <div className="profile-stat">
                    <div className="stat-val">{profile.followers}</div>
                    <div className="stat-label">FOLLOWERS</div>
                </div>
                <div className="profile-stat">
                    <div className="stat-val">{profile.hangs}</div>
                    <div className="stat-label">HANGS</div>
                </div>
                <div className="profile-stat">
                    <div className="stat-val">{profile.reviews}</div>
                    <div className="stat-label">REVIEWS</div>
                </div>
            </div>
        </div>
    </div>
  )
}
