
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import Feed from '../reusables/Feed'

class ProfileItem extends Component {
  render() {
      const { profile } = this.props;
    return (
        <Link to={'profile/' + profile._id}>
            <Feed profile={profile} />
        </Link>
    )
  }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem;