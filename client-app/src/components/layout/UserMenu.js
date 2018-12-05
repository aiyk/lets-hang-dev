import React from 'react'
import { Link } from "react-router-dom"
import userimage from '../../assets/users/1.jpg'
import cog from '../../assets/icons/cog.svg'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutUser } from '../../store/actions/authActions'

function UserMenu({ handleToggleMenu, props }) {

    const { user } = this.props.auth;

    return (
        <div className="user-actions">
            <div className="actions-header">
                <div className="user-img">
                    <img src={userimage} alt="user" />
                </div>
                <div className="user-intro">
                    <img className="settings-ico" src={cog} alt="user" />
                    <div className="name">{user.firstname} {user.lastname}</div>
                    <div className="saying">{user.quote}</div>
                </div>
            </div>
            <Link onClick={handleToggleMenu} to={'profile/' + user.id}><button className="btn btn-center btn-x1 btn-full btn-hollow ">View Profile</button></Link>
            <div className="action-links">
                <Link onClick={handleToggleMenu} className="action-link" to="/">My Meetings</Link>
                <Link onClick={handleToggleMenu} className="action-link" to="/">My Circles</Link>
                <Link onClick={handleToggleMenu} className="action-link" to="/">Account Settings</Link>
                <Link onClick={props.logoutUser} href="./" className="action-link">Log Out</Link>
            </div>
        </div>
    )
}

UserMenu.PropTypes = {
    UserMenu: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(UserMenu)