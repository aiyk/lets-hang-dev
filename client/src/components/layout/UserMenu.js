import React from 'react'
import { Link } from "react-router-dom"
import cog from '../../assets/icons/cog.svg'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'
import { clearCurrentProfile } from '../../store/actions/peopleActions'

function UserMenu(props) {
    
    const { user } = props.auth;

    return (
        <div className="user-actions">
            <div className="actions-header">
                <div className="user-img">
                    <img src={user.avatar} alt={user.firstname} />
                </div>
                <div className="user-intro">
                    <img className="settings-ico" src={cog} alt="user" />
                    <div className="name">{user.firstname} {user.lastname}</div>
                    <div className="saying">{user.quote}</div>
                </div>
            </div>
            <Link onClick={props.handleToggleMenu} to={'profile/' + user.id}><button className="btn btn-center btn-x1 btn-full btn-hollow ">View Profile</button></Link>
            <div className="action-links">
                <Link onClick={props.handleToggleMenu} className="action-link" to="/">My Meetings</Link>
                <Link onClick={props.handleToggleMenu} className="action-link" to="/">My Circles</Link>
                <Link onClick={props.handleToggleMenu} className="action-link" to="/">Account Settings</Link>
                <Link onClick={props.logoutUser} to="./" className="action-link">Log Out</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(UserMenu)