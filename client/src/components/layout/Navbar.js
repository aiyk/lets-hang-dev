import React from "react";
import { connect } from "react-redux";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import './Layout.scss';

const Navbar = (props) => {
  const { isAuthenticated, user } = props.auth;
  const nav = isAuthenticated ? <SignedinLinks user={user} /> : <SignedoutLinks />;

  return (
    <div className="navbar-wrap">{nav}</div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar)