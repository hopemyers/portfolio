import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Title from './Title.js'
import Home from './Home.js'
import Header from './Header.js'
import About from './About.js'
import Photos from './Photos.js'
import Portfolio from './Portfolio.js'
import Resume from './Resume.js'
import Contact from './Contact.js'
import Slanguage from './Slanguage.js'
import Trashley from './Trashley.js'
import Rain from './Rain.js'
import Color from './Color.js'
import Shanghai from './Shanghai.js'
import Caprica from './Caprica.js'

class App extends Component {
// state goes here



// functions go here
startPage = () => {
  return <Title></Title>
}

aboutPage = () => {
  return <About></About>
}

photosPage = () => {
  return <Photos></Photos>
}

portfolioPage = () => {
  return <Portfolio></Portfolio>
}

resumePage = () => {
  return <Resume></Resume>
}

contactPage = () => {
  return <Contact></Contact>
}

homePage = () => {
  return (
<div>
<Header></Header>
<Home></Home>
</div>
  )
}

slanguage = () => {
  return <Slanguage></Slanguage>
}

trashley = () => {
  return <Trashley></Trashley>
}

rain = () => {
  return <Rain></Rain>
}

color = () => {
  return <Color></Color>
}

shanghai = () => {
  return <Shanghai></Shanghai>
}

caprica = () => {
  return <Caprica></Caprica>
}

  render() {
    return (
      <Router>
      <div className="app">

      <Route path="/" exact component={this.startPage} />
      <Route path="/Home" exact component={this.homePage} />
      <Route path="/About" exact component={this.aboutPage} />
      <Route path="/Photos" exact component={this.photosPage} />
      <Route path="/Portfolio" exact component={this.portfolioPage} />
      <Route path="/Resume" exact component={this.resumePage} />
      <Route path="/Contact" exact component={this.contactPage} />
      <Route path="/Slanguage" exact component={this.slanguage} />
      <Route path="/Trashleys_Journey" exact component={this.trashley} />
      <Route path="/When_it_Rains" exact component={this.rain} />
      <Route path="/Sounds_of_Color" exact component={this.color} />
      <Route path="/From_Shanghai_With_Love" exact component={this.shanghai} />
      <Route path="/Caprica" exact component={this.caprica} />

      </div>
      </Router>
    );
  }
}
export default App;
