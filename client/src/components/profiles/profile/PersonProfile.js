import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ProfileActivities from './ProfileActivities'
import ProfileCommunity from './ProfileCommunity'
import ProfileFeeds from './ProfileFeeds'
import ProfileMessages from './ProfileMessages'
import ProfileSummary from './ProfileSummary'
// import { NavLink } from "react-router-dom"

class PersonProfile extends Component {
  state = {
    PersonSummary: {
      firstname: 'Airmy',
      lastname: 'Stone',
      profession: 'Software Engineer',
      feedRight1: '11th Nov, 2018',
      feedRight2: '12:08PM',
      quote: 'Perhaps the most important principle for the good algorithm designer is to refuse to be content. -Ullman, 1974',
      followers: 700,
      hangs: 200,
      reviews: 6
    },
    person_id: null,
    home_tab_classes: ['tab-menu-item', 'active-tab'],
    activities_tab_classes: ['tab-menu-item'],
    messages_tab_classes: ['tab-menu-item'],
    communities_tab_classes: ['tab-menu-item']
  }

  componentDidMount() {
    console.log(this.props);
    let person_id = this.props.match.params.person_id;
    this.setState({
      person_id
    });
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

    // const { person } = this.props;

    let home_base = this.state.home_tab_classes[0];
    let home_active = '';
    let tab_content = '';

    if (this.state.home_tab_classes.length > 1) {
      home_active = this.state.home_tab_classes[1];
      tab_content = <ProfileFeeds feed={this.state.PersonSummary} />;
    }
    let activities_base = this.state.activities_tab_classes[0];
    let activities_active = '';
    if (this.state.activities_tab_classes.length > 1) {
      activities_active = this.state.activities_tab_classes[1];
      tab_content = <ProfileActivities feed={this.state.PersonSummary} />;
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

    if(this.person){
      return (
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
  
            <ProfileSummary person={this.person} />
          </div>
        </div>
      )
    } else {
      return(
        <div>Loading data...</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const person_id = this.props.match.params.person_id;
  const people = state;
  const person = people ? people[person_id] : null
  return {
    person: person
  }
}

export default compose(
  connect(mapStateToProps)
)(PersonProfile)