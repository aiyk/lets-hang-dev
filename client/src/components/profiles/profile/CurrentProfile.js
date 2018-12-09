import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getCurrentProfile } from '../../../store/actions/profileActions';
import ProfileActivities from './ProfileActivities'
import ProfileCommunity from './ProfileCommunity'
import ProfileFeeds from './ProfileFeeds'
import ProfileMessages from './ProfileMessages'
import ProfileSummary from './ProfileSummary'

class CurrentProfile extends Component {
    state = {
        home_tab_classes: ['tab-menu-item', 'active-tab'],
        activities_tab_classes: ['tab-menu-item'],
        messages_tab_classes: ['tab-menu-item'],
        communities_tab_classes: ['tab-menu-item']
    }

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    handleHomeClick = () => {
        this.setState({
            home_tab_classes: ['tab-menu-item', 'active-tab'],
            activities_tab_classes: ['tab-menu-item'],
            messages_tab_classes: ['tab-menu-item'],
            communities_tab_classes: ['tab-menu-item']
        });
    }
    handleActivitiesClick = () => {
        this.setState({
            home_tab_classes: ['tab-menu-item'],
            activities_tab_classes: ['tab-menu-item', 'active-tab'],
            messages_tab_classes: ['tab-menu-item'],
            communities_tab_classes: ['tab-menu-item']
        });
    }
    handleMessagesClick = () => {
        this.setState({
            home_tab_classes: ['tab-menu-item'],
            activities_tab_classes: ['tab-menu-item'],
            messages_tab_classes: ['tab-menu-item', 'active-tab'],
            communities_tab_classes: ['tab-menu-item']
        });
    }
    handleCommunitiesClick = () => {
        this.setState({
            home_tab_classes: ['tab-menu-item'],
            activities_tab_classes: ['tab-menu-item'],
            messages_tab_classes: ['tab-menu-item'],
            communities_tab_classes: ['tab-menu-item', 'active-tab']
        });
    }
    
    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props;
        console.log(profile);
        let profileContent;

        let home_base = this.state.home_tab_classes[0];
        let home_active = '';
        let tab_content = '';

        if (this.state.home_tab_classes.length > 1) {
            home_active = this.state.home_tab_classes[1];
            tab_content = <ProfileFeeds profile={profile} />;
        }
        let activities_base = this.state.activities_tab_classes[0];
        let activities_active = '';
        if (this.state.activities_tab_classes.length > 1) {
            activities_active = this.state.activities_tab_classes[1];
            tab_content = <ProfileActivities profile={profile} />;
        }
        let messages_base = this.state.messages_tab_classes[0];
        let messages_active = '';
        if (this.state.messages_tab_classes.length > 1) {
            messages_active = this.state.messages_tab_classes[1];
            tab_content = <ProfileMessages />;
        }
        let communities_base = this.state.communities_tab_classes[0];
        let communities_active = '';
        if (this.state.communities_tab_classes.length > 1) {
            communities_active = this.state.communities_tab_classes[1];
            tab_content = <ProfileCommunity />;
        }


        if (profile === null || loading) {
            profileContent = <Spinner />;
        } else {
            //check if logged in user has profile data
            if (Object.keys(profile).length > 0) {
                profileContent = (
                    <div className="full-screen-view">
                        <div className="full-screen-bg-overlay pre-profile">
                            <div className="profile-body nice nice-scroll">
                                <div className="tab-menu">
                                    <div onClick={this.handleHomeClick} className={home_base + ' ' + home_active}>Home</div>
                                    <div onClick={this.handleActivitiesClick} className={activities_base + ' ' + activities_active}>Activities</div>
                                    <div onClick={this.handleMessagesClick} className={messages_base + ' ' + messages_active}>Messaging</div>
                                    <div onClick={this.handleCommunitiesClick} className={communities_base + ' ' + communities_active}>Community</div>
                                </div>

                                <div className="tab-content">{tab_content}</div>
                            </div>

                            <ProfileSummary profile={profile} />
                        </div>
                    </div>);
            } else {
                //user is logged in but has no profile
                profileContent = <div>user is logged in but has no profile</div>
            }
        }

        return (
            <div>{profileContent}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

CurrentProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object
}

export default compose(
    connect(mapStateToProps, { getCurrentProfile })
)(CurrentProfile)