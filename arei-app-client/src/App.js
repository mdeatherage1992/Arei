import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import Content from './Content';
import Products from './Products';
import Types from './Types';
import Users from './Users'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBar style={{display:"flex", flexDirection:"row"}} />
          <Route exact path="/" />
          <Route path="/products" component={Products} />
          <Route path="/users" component={Users} />
          <Route path="/types" component={Types} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
