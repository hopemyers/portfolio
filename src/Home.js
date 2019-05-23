import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
// state goes here



// functions go here


  render() {
    return (
      <div id="home">
      <Link to="/About" style={{ textDecoration: 'none' }}><div className="titleBox"> About </div></Link>
      <Link to="/Photos" style={{ textDecoration: 'none' }}><div className="titleBox"> Photos </div></Link>
      <Link to="/Portfolio" style={{ textDecoration: 'none' }}><div className="titleBox"> Portfolio </div></Link>
      <Link to="/Resume" style={{ textDecoration: 'none' }}><div className="titleBox"> Resume </div></Link>
      <Link to="/Contact" style={{ textDecoration: 'none' }}><div className="titleBox"> Contact </div></Link>
      </div>
    );
  }
}
export default Home;
