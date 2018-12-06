import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { logoutUser } from '../../store/actions/authActions'
import UserMenu from './UserMenu'
import logo from '../../assets/logo/logo.svg'
import notification from '../../assets/icons/notification.svg'

class SignedinLinks extends Component {
    
    state = {
        toggleUserMenu: false
    };

    handleToggleMenu = () => {
        this.setState({
            toggleUserMenu: !this.state.toggleUserMenu
        });
    }

    render() {
        const { user } = this.props.auth;
        
        return (
            <div className="main-nav">
                <Link to="/" className="nav-logo"><img src={logo} alt="logo" /></Link>
                <div className="menu-list">
                    <Link className="menu-item" to="/find-place">Places</Link>
                    <Link className="menu-item" to="/find-person">Poeple</Link>
                    <Link className="menu-item" to="/">Events</Link>
                </div>
                <div className="header-rhs">
                    <div className="rhs-wrap">
                        <img className="user-tab-icon" src={notification} alt='icon' />
                        <div onClick={this.handleToggleMenu} className="user-data">
                            <div className="user-name">{user.firstname}</div>
                            <div className="user-loggedin">
                                <img src={user.avatar} alt="user.firstname" title="you must have a Gravatar connected to youe email to display an image" />
                            </div>
                        </div>
                    </div>
                    {this.state.toggleUserMenu ? (<UserMenu handleToggleMenu={this.handleToggleMenu} />) : (null)} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(SignedinLinks)