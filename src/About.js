import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pie from './images/pie.jpg'
import NYU from './images/nyulogo.jpg'
import IMA from './images/ima.jpg'
import Camera from './images/camera.jpg'

class About extends Component {
// state goes here



// functions go here


  render() {
    return (
      <div id="about">
      <div id="header">About</div>
        <div id="aroundaboutbox">
          <div id="aboutpart">
          <p id="center"> About Me </p> I was born and raised in Washington DC and am currently a sophmore at New York Universitys campus in Shanghai, China. I love to bake, make amazing apple pies, and my favorite food is anything that combines dark chocolate and raspberries.
          <img id="piepic" src={Pie} alt="Pie"/>
          </div>

          <div id="aboutpart">
          <img id="nyulogo" src={NYU} alt="NYU logo"/>
          <p id="center"> My School </p> New York University in Shanghai is a branch of NYU that offers a 4 year undergraduate program. I will spend 3 years in Shanghai and do a Junior year abroad with semesters in New York and Paris. When I graduate I will get a diploma from NYU as well as East China Normal University, NYUs partner school in Shanghai.
          </div>

          <div id="aboutpart">
          <p id="center"> My Major </p> I am majoring in Interactive Media and Business, a new major unique to NYU Shanghai. I study web design, programming, data visualization, and digital media production. To complement my computer skills I am taking classes in economics, statistics, and marketing. I am also minoring in environmental science and Chinese.
          <img id="ima" src={IMA} alt="Interactive Media Arts"/>
          </div>

          <div id="aboutpart">
          <img id="camera" src={Camera} alt="Photography"/>
          <p id="center"> My Hobbies </p> I love playing ultimate frisbee. I play for a womens club team in Shanghai and am the president of frisbee club at NYU Shanghai. I have recently taken up photography and love traveling and taking pictures. Some of my favorites can be seen on the photo page of my website.
          </div>
        </div>
      </div>
    );
  }
}
export default About;
