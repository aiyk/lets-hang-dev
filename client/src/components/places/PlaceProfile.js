import React, { Component } from 'react'
import userimage from '../../assets/users/1.jpg'


class PlaceProfile extends Component {
  state = {
    place_id: null
  }

  componentDidMount(){
    let place_id = this.props.match.params.place_id;
    this.setState({
      place_id
    });
  }

  render() {
    return (
      <div className="profile-wrap">
        <div className="profile">
          <div className="user-img">
            <img src={userimage} alt='user' />
          </div>
          <div className="user-data"></div>
        </div>
      </div>
    )
  }
}
export default PlaceProfile