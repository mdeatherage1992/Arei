import React, { Component } from 'react';
import './App.css';
import 'cors-anywhere'
import UserCard from './UserCard'
import TypeCard from './TypeCard'
import ProductCard from './ProductCard'
import AdminCard from './AdminCard'

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      types: [],
      products: [],
      admins: []
    }
  }

  componentWillMount() {
  var proxyUrl = 'http://localhost:8080/',
    userUrl = "http://localhost:3000/api/v1/users",
    typeUrl = "http://localhost:3000/api/v1/types",
    productUrl = "http://localhost:3000/api/v1/products",
    adminUrl = "http://localhost:3000/api/v1/admins"

  fetch(proxyUrl + userUrl)
  .then(blob => blob.json())
  .then(data => {this.setState({data: data})})
  .catch(e => {
    console.log(e);
    return e;
  });


  fetch(proxyUrl + typeUrl)
  .then(blob => blob.json())
  .then(data => {this.setState({types: data})})
  .catch(e => {
    console.log(e);
    return e;
  });


  fetch(proxyUrl + productUrl)
  .then(blob => blob.json())
  .then(data => {this.setState({products: data})})
  .catch(e => {
    console.log(e);
    return e;
  });


  fetch(proxyUrl + adminUrl)
  .then(blob => blob.json())
  .then(data => {this.setState({admins: data})})
  .catch(e => {
    console.log(e);
    return e;
  });

  }

  render() {
    this.state.data.forEach(i => {
      i.username = "Ricky" + i.id

    })
  return (
    <div>
  <ul className="list-group">
    {this.state.data.map(data =>
    <li key={data.id} className="list-group-item">
    <UserCard key={data.id}user={data}/>
    </li>
   )}
  </ul>
    <h5>cut off</h5>
  <ul className="list-group">
    {this.state.types.map(type =>
    <li key={type.id} className="list-group-item">
    <TypeCard key={type.id} type={type} />
    </li>
   )}
  </ul>
  <ul className="list-group">
    {this.state.products.map(product =>
    <li key={product.id} className="list-group-item">
    <ProductCard key={product.id} product={product} />
    </li>
   )}
  </ul>
    </div>
)
}
}
