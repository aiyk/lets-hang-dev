import React, { Component } from 'react'
import SearchDropDown from '../../reusables/searchDropDown/SearchDropDown'
// import locationMarker from '../../../assets/icons/ellipsis-v.svg'

class Hero extends Component {

  state = {
    switcher: false,
    locationData: [
      {key: 1, location:'Ikeja Lagos Nigeria'},
      {key: 2, value:'Ikeja Lagos Nigeria'},
      {key: 3, value:'Ikeja Lagos Nigeria'},
      {key: 4, value:'Ikeja Lagos Nigeria'},
      {key: 5, value:'Ikeja Lagos Nigeria'},
      {key: 6, value:'Ikeja Lagos Nigeria'},
      {key: 7, value:'Ikeja Lagos Nigeria'},
      {key: 8, value:'Ikeja Lagos Nigeria'},
    ],
    locationSearchCriteriaUl: false,
    locationSearchCriteriaValue: '',

    typeData: [
      {key: 1, value:'Date'},
      {key: 2, value:'Corporate Meeting'},
      {key: 3, value:'Casual Meeting'},
      {key: 4, value:'Hang Out'},
      {key: 5, value:'Event'},
      {key: 6, value:'Wedding'},
      {key: 7, value:'Religious'},
      {key: 8, value:'Others'},
    ],
    typeSearchCriteriaUl: false,
    typeSearchCriteriaValue: '',

    placeData: [
      {key: 1, value:'Quilox Sport'},
      {key: 2, value:'Jonas Hangout'},
      {key: 3, value:'Drull\'s Bar'},
      {key: 4, value:'Ikeja Shopping Mall'},
      {key: 5, value:'Protea Hotel'},
      {key: 6, value:'Kazeem Events Center'},
      {key: 7, value:'Briggs Gardens'},
      {key: 8, value:'Water Front Beach'},
    ],
    placeSearchCriteriaUl: false,
    placeSearchCriteriaValue: '',

    dateData: [
      {key: 1, value:'11/12/2018'},
      {key: 2, value:'Corporate Meeting'},
      {key: 3, value:'Casual Meeting'},
      {key: 4, value:'Hang Out'},
      {key: 5, value:'Event'},
      {key: 6, value:'Wedding'},
      {key: 7, value:'Religious'},
      {key: 8, value:'Others'},
    ],
    dateSearchCriteriaUl: false,
    dateSearchCriteriaValue: ''
  }

  handleSearchChange = (e) => {

    //compute state keys
    let key = e.target.id + 'Ul';
    let val = e.target.id + 'Value';

    e.target.value ? (
      this.setState({
        switcher: true,
        [key]: true,
        [val]: e.target.value
      })
    ) : (
      this.setState({
        switcher: false,
        [key]: false,
        [val]: ''
      })
    )      
  }
  handleSearchBlur = (e) => {
    let key = e.target.id + 'Ul';

    this.setState({
      switcher: false,
      [key]: false
    })
  }
  handleSearchItemClick = (e) => {
    console.log(e);
    let key = e.target.id + 'Ul';
    let val = e.target.id + 'Value';
    this.setState({
      [key]: true,
      switcher: false,
      [val]: e.target.innerHtml
    })
  }

  SearchCriteriaUl = () => {
    let data = null;
    if(this.state.switcher){
      if(this.state.locationSearchCriteriaUl){
        data = this.state.locationData;
      } else if(this.state.typeSearchCriteriaUl){
        data = this.state.typeData;
      } else if(this.state.placeSearchCriteriaUl){
        data = this.state.placeData;
      } else if(this.state.dateSearchCriteriaUl){
        data = this.state.dateData;
      }
      return(
        <SearchDropDown payload={data} action={this.handleSearchItemClick}/>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="hero-sect">
        <div className="hero-overlay">
          <div className="main-search-container">
            {/* this input should be smart to pull off a full search suggestion as user types */}
            <div className="component-wrap">
              <label>Location:</label>
              <div className="search-input-wrap">
                {/* <img src={locationMarker} /> */}
                <input onChange={this.handleSearchChange} onBlur={this.handleSearchBlur} value={this.state.locationSearchCriteriaValue} id="locationSearchCriteria" type="text" className="component-input"></input>
              </div>
              {
                this.state.locationSearchCriteriaUl ? (this.SearchCriteriaUl()) : (null)
              }
            </div>
            <div className="component-wrap">
              <label>Meeting Type:</label>
              <div className="search-input-wrap">
                {/* <img src={locationMarker} /> */}
                <input onChange={this.handleSearchChange} onBlur={this.handleSearchBlur} value={this.state.typeSearchCriteriaValue} id="typeSearchCriteria" type="text" className="component-input"></input>
              </div>
              {
                this.state.typeSearchCriteriaUl ? (this.SearchCriteriaUl()) : (null)
              }
            </div>
            <div className="component-wrap">
              <label>Place:</label>
              <div className="search-input-wrap">
                {/* <img src={locationMarker} /> */}
                <input onChange={this.handleSearchChange} onBlur={this.handleSearchBlur} value={this.state.placeSearchCriteriaValue} id="placeSearchCriteria" type="text" className="component-input"></input>
              </div>
              {
                this.state.placeSearchCriteriaUl ? (this.SearchCriteriaUl()) : (null)
              }
            </div>
            <div className="component-wrap">
              <label>Available Dates:</label>
              <div className="search-input-wrap">
                {/* <img src={locationMarker} /> */}
                <input onChange={this.handleSearchChange} onBlur={this.handleSearchBlur} value={this.state.dateSearchCriteriaValue} id="dateSearchCriteria" type="text" className="component-input"></input>
              </div>
              {
                this.state.dateSearchCriteriaUl ? (this.SearchCriteriaUl()) : (null)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default  Hero