import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/logo/logo.svg'

export default function SignedoutLinks() {
  return (
    <div className="main-nav">
      <Link to="/" className="nav-logo"><img src={logo} alt="logo" /></Link>
      <div className="menu-list">
        <Link className="menu-item" to="/find-place">Places</Link>
        <Link className="menu-item" to="/find-person">Poeple</Link>
        <Link className="menu-item" to="/">Events</Link>
      </div>
      <div className="nav-ctas">
          <Link to="/login" className="nav-cta">LOGIN</Link>
          <Link to="/registration" className="nav-cta">REGISTER</Link>
      </div>
    </div>
  )
}
