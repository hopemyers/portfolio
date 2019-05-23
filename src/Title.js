import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Title extends Component {
// state goes here



// functions go here
flip = () => {
  document.getElementById('nameabout').innerHTML = "Hello, I am Hope Myers. <br> <br> I am a Interactive Media and Business Major at NYU Shanghai. Welcome to my website!";
  document.getElementById('nameabout').style.fontSize = "1.4em";
  document.getElementById('nameabout').style.fontFamily = "monospace";
  document.getElementById('nameabout').style.textAlign = "left";
}

flipBack = () => {
  document.getElementById('nameabout').innerHTML = "Hope Myers";
  document.getElementById('nameabout').style.fontSize = "4em";
  document.getElementById('nameabout').style.fontFamily = 'Fascinate Inline';
  document.getElementById('nameabout').style.textAlign = "center";
}

nextPage = () => {

}

  render() {
    return (
      <Link to="/Home" style={{ textDecoration: 'none' }}><div className="title" id="nameabout" onMouseOver={this.flip} onMouseOut={this.flipBack} onClick={this.nextPage}>
      Hope Myers
      </div></Link>

    );
  }
}
export default Title;
