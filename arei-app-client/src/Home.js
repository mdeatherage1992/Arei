import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import { Jumbotron,Button } from 'react-bootstrap'
import Content from './Content';
import Products from './Products';
import Types from './Types';
import Users from './Users';
import myVideo from './traffic.mp4'



class Home extends Component {
  render() {
    return (
      <div className="App">
      <div className="facebook-video-id"><video controls false muted id="video-id" src={myVideo} autoPlay={true} loop={true} type="video/mp4" /></div>
      <div id="jumbo">
      <Jumbotron>
      <h1>E-Commerce App</h1>
      <p>
        E-Commerce Main page which will showcase the types of clothing
        on the site. In gridded, video background buttons.
      </p>
    </Jumbotron>
      </div>
      </div>
    );
  }
}

export default Home;
