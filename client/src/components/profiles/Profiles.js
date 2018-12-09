import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getProfiles } from '../../store/actions/profileActions'
import ProfileItem from './ProfileItem'
import './Profiles.scss'

class Profiles extends Component {

    componentDidMount() {
        this.props.getProfiles();
    }
    render() {
        const { profiles, loading } = this.props.profile;
        let profileItems;
        
        if (profiles === null || loading) {
            profileItems = <Spinner />;
        } else {
            if (profiles.length > 0) {
                profileItems = profiles.map(profile => (
                    <div className="return-wrap" key={profile._id}><ProfileItem profile={profile} /></div>
                ))
            } else {
                profileItems = <h4>No profiles found...</h4>;
            }
        }

        return (
            <div className="full-screen-lite">
                <div className="pre-profile">
                    <div className="profile-body nice nice-scroll">
                        <div className="feeds-wrap">
                            <div className="tab-title">Find Someone</div>
                            <input type="text" id="findInput" className="find-input" />
                            <div className="feeds">
                                <div>{profileItems}</div>
                            </div>
                        </div>
                    </div>

                    <div className="right-col nice nice-scroll"></div>
                </div>
            </div>
        )
    }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles)