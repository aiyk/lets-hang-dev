import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../store/actions/peopleActions';
import "./PeopleList.scss";
import PersonItem from "./PersonItem";

class PeopleList extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    //console.log(this.props); 
    // const { people } = this.props;
    // const returnList = people.length ? (
    //   people.map(person => {
    //     return <div className="return-wrap" key={person.id}><PersonItem person={person} /></div> 
    //   })
    // ) : (<div>Empty list returned</div>);
    
    return(
      <div className="full-screen-lite">
        <div className="pre-profile">
          <div className="profile-body nice nice-scroll">
            <div className="feeds-wrap">
              <div className="tab-title">Find Someone</div>
              <input type="text" id="findInput" className="find-input" />
              <div className="feeds">
                {/* <div>{returnList}</div> */}
              </div>
            </div>
          </div>

          <div className="right-col nice nice-scroll"></div> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people.people
  }
}

export default compose(
  connect(null, { getCurrentProfile })
)(PeopleList)
