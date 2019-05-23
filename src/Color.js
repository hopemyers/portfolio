import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Color extends Component {
// state goes here



// functions go here


  render() {
    return (
      <div id="colorpage">
      <div id="projectheader">The Sounds of Color</div>
      <div id="sections"> Project Summary </div>
        <div id="projectsbox"> coming soon... </div>
      <div id="sections"> Research </div>
        <div id="projectsbox"> coming soon... </div>
      <div id="sections"> Prototype </div>
        <div id="projectsbox"> coming soon... </div>
      <div id="sections"> Future Work </div>
        <div id="projectsbox"> coming soon... </div>
      </div>
    );
  }
}
export default Color;
