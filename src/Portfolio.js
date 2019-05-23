import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rain from './images/whenitrains.jpg'
import Color from './images/soundsofcolor.jpg'
import Shanghai from './images/loveshanghai.jpg'
import Caprica from './images/caprica.jpg'
import Slanguage from './images/slanguage.jpg'
import Trashley from './images/trashley.png'

class Portfolio extends Component {
// state goes here



// functions go here


  render() {
    return (
      <div id="portfolio">
      <div id="header">Portfolio</div>
      <div id="sections"> Spring 2019 </div>
        <div id="projectsbox">
          <Link to="/Slanguage"><img id="projectlink" src={Slanguage} alt="Slanguage"/></Link>
          <Link to="/Trashleys_Journey"><img id="projectlink" src={Trashley} alt="Trashley's Journey"/></Link>
        </div>
      <div id="sections"> Fall 2018 </div>
        <div id="projectsbox">
          <Link to="/When_it_Rains"><img id="projectlink" src={Rain} alt="When it Rains"/></Link>
          <Link to="/Sounds_of_Color"><img id="projectlink" src={Color} alt="The Sounds of Color"/></Link>
          <Link to="/From_Shanghai_With_Love"><img id="projectlink" src={Shanghai} alt="From Shanghai With Love"/></Link>
          <Link to="/Caprica"><img id="projectlink" src={Caprica} alt="Caprica"/></Link>
        </div>
      </div>
    );
  }
}
export default Portfolio;
