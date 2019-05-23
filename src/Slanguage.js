import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import Slanguagelogo from './images/slanguagelogo.png'

class Slanguage extends Component {
// state goes here



// functions go here


  render() {
    return (
      <div id="slanguagepage">
      <div id="projectheader">Slanguage</div>
      <img id="slanguagelogo" src={Slanguagelogo} alt="Slanguage Logo"/>
      <div id="sections"> Project Summary </div>
        <div id="projectsbox"> Slanguage is a Chinese-English slang dictionary (think urban dictionary but with translations) to help people keep up with China’s rapidly changing slang. Users can check the random word of the day, search for slang words, browse the entire dictionary, and even submit their own words or phrases.
        <p id="center"> Made in collaboration with Tiana Lui and James Chou </p>
        </div>
      <div id="sections"> Research </div>
        <div id="projectsbox"> I have been learning Chinese for six years now and have lived in China for three years however I found that I still do not know very much Chinese slang. My partners and I have searched online but most websites only have 10 to 20 slangs and many of them are outdated. The goal of Slanguage is to have a comprehensive dictionary that is able to stay up to date as users add their own content. For now we hope to launch within the NYU Shanghai community as since the founding of the school there have been over 2000 new foreign students coming to China who are required to learn Chinese. We hope to make the Chinese learning experience more fun and make it easier for integration into the local community. <br></br><br></br> Over the course of creating the prototype we did some user testing with friends who all really enjoyed the website. However after an incident where someone anonomously posted a really bad word we decided that although we do not want to censor the site it would be best to have users sign in with a .edu email so there is some accountability to avoid a similar fate to yik yak.</div>
      <div id="sections"> Prototype </div>
        <div id="projectsbox">
          <p id="halfwidth1"> Paper Prototype: </p> <p id="halfwidth2"> Website Demo: </p>
          <ReactPlayer id="paperprototypevideo" url='https://youtu.be/IJRa53KRfZg' controls muted width="45%" />
          <ReactPlayer id="websitedemo" url='https://youtu.be/Qq1NWHcpqqk' controls muted width="45%" />
          <p id="fullwidth"> Check out Slanguage at: <br></br> <br></br><a href="https://www.slanguagedictionary.com"> www.slanguagedictionary.com </a> </p>
        </div>
      <div id="sections"> Future Plans </div>
        <div id="projectsbox">
        <ul>
        <li> Advertise on facebook and in the NYU shanghai groups and WeChat </li>
        <li> Have the word of the day update every day (instead of every reload) using firebase </li>
        <li> Add 1-10 levels for explicitness</li>
        <li> Filter by explicit or not </li>
        <li> Have a date added show for each slang </li>
        <li> Have merchendise like coffee table books, calendars, mugs etc.</li>
        </ul>
        </div>
      </div>
    );
  }
}
export default Slanguage;
