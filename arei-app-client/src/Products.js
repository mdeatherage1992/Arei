import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class Products extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
  var proxyUrl = 'http://localhost:8080/',
    userUrl = "http://localhost:3000/api/v1/products"

  fetch(proxyUrl + userUrl)
  .then(blob => blob.json())
  .then(data => {this.setState({data: data})})
  .catch(e => {
    console.log(e);
    return e;
  });

  }




  render() {
    return (
      <div>
      <p>This is products</p>
    <ul className="list-group">
      {this.state.data.map(data =>
      <li key={data.id} className="list-group-item">
      <ProductCard key={data.id} product={data}/>
      </li>
     )}
    </ul>
      </div>
    )
  }
}
