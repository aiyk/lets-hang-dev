import React, { Component } from "react";
import "./Homepage.scss";
import Hero from './sections/Hero';
import Pitch from './sections/Pitch';

class Homepage extends Component {
  render() {
    return <div>
        <Hero />
        <Pitch />
    </div>
  }
}

export default Homepage;
