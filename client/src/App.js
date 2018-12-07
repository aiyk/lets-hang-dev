import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import store from './store/Store'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { clearCurrentProfile } from './store/actions/peopleActions';

import './App.scss';
import Navbar from './components/layout/Navbar';
import Homepage from './components/homepage/Homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PeopleList from './components/people/PeopleList';
import PersonProfile from './components/people/person/PersonProfile';
import Places from './components/places/Places';
import PlaceProfile from './components/places/PlaceProfile';

//axios global config
axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//check for token
if(localStorage.jwtToken){
  //set token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    //logout user
    store.dispatch(logoutUser());
    //clear current profile
    store.dispatch(clearCurrentProfile());
    //reditrect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar /> 
          <div className="site-wrap">
            <Switch>
              <Route exact path="/" component={ Homepage } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/registration" component={ Register } />
              <Route exact path="/find-person" component={ PeopleList } />
              <Route exact path="/profile/:person_id" component={ PersonProfile } />
              <Route exact path="/find-place" component={ Places } />
              <Route exact path="/profile/:place_id" component={ PlaceProfile } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;