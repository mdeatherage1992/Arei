import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import logo from './logo.png'
export default class NavBar extends Component {
  render() {
  return (
    <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
              <img className="logo-img"src={logo} />
                <a href="home">E-Commerce Store</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/users">
              Users
              </NavItem>
              <NavItem eventKey={2} href="/products">
                Products
              </NavItem>
              <NavItem eventKey={2} href="/types">
                Types
              </NavItem>
            </Nav>
          </Navbar>
)}
}
