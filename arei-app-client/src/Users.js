import React, { Component } from 'react'
import UserCard from './UserCard'

export default class Users extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
  var proxyUrl = 'http://localhost:8080/',
    userUrl = "http://localhost:3000/api/v1/users"

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
    <p>This is users</p>
    <ul className="list-group">
      {this.state.data.map(data =>
      <li key={data.id} className="list-group-item">
      <UserCard key={data.id}user={data}/>
      </li>
     )}
    </ul>
    </div>
    )
  }
}
