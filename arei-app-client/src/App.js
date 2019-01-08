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
import Home from './Home'



class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBar style={{display:"flex", flexDirection:"row"}} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/users" component={Users} />
          <Route path="/types" component={Types} />
        </div>
      </Router>
      <div class="footer">
      <p className="left">Left aligned text here<br />Next line here</p>
      <p className="right">Right aligned text here<br />Next line here</p>
      <p className="centered">Center Text here<br />Next line here</p>
      </div>
      </div>
    );
  }
}

export default App;
