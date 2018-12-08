

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import cog from '../../assets/icons/cog.svg'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'
import { clearCurrentProfile } from '../../store/actions/peopleActions'

class UserMenu extends Component {

    render() {
        const onLogoutClick = (e) => {
            e.preventDefault()
            this.props.clearCurrentProfile();
            this.props.logoutUser();
        }
        const { user } = this.props.auth;
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
                <Link onClick={this.props.handleToggleMenu} to={'/dashboard' + user.id}><button className="btn btn-center btn-x1 btn-full btn-hollow ">View Profile</button></Link>
                <div className="action-links">
                    <Link onClick={this.props.handleToggleMenu} className="action-link" to="/">My Meetings</Link>
                    <Link onClick={this.props.handleToggleMenu} className="action-link" to="/">My Circles</Link>
                    <Link onClick={this.props.handleToggleMenu} className="action-link" to="/">Account Settings</Link>
                    <a onClick={onLogoutClick} href="./" className="action-link">Log Out</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(UserMenu)