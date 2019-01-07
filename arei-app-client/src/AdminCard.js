import React from 'react'


const AdminCard = ({admin}) => (
  <div key={admin.id} className="tracklistCard">
  <p>Email: {admin.email}</p>
  <p>Coordinates: [{(""+admin.admin_coordinate).split()}]</p>
  </div>
)

export default AdminCard;
