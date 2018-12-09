import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store/Store'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import axiosGlobals from './utils/axiosGlobals';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { clearCurrentProfile } from './store/actions/profileActions';
import PrivateRoute from './components/common/PrivateRoute';

import './App.scss';
import Navbar from './components/layout/Navbar';
import Homepage from './components/homepage/Homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profiles from './components/profiles/Profiles';
import PersonProfile from './components/profiles/profile/PersonProfile';
import CurrentProfile from './components/profiles/profile/CurrentProfile';
import Places from './components/places/Places';
import PlaceProfile from './components/places/PlaceProfile';

//axios global config
axiosGlobals();

//check for token
if (localStorage.jwtToken) {
  //set token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
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
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Register} />
              <PrivateRoute exact path="/dashboard" component={CurrentProfile} />
              <Route exact path="/find-person" component={Profiles} />
              <Route exact path="/profile/:person_id" component={PersonProfile} />
              <Route exact path="/find-place" component={Places} />
              <Route exact path="/profile/:place_id" component={PlaceProfile} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App; 