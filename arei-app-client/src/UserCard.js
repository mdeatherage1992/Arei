import React from 'react'


const UserCard = ({user}) => (
  <div key={user.id} className="tracklistCard">
  <p>Name: {user.username}</p>
  <p>Email: {user.email}</p>
  <p>Coordinates: [{(""+user.user_coordinate).split()}]</p>
  <p>Password: {user.user_password}</p>
  </div>
)

export default UserCard;
