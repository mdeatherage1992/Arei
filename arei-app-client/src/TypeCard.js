import React from 'react'


const TypeCard = ({type}) => (
  <div key={type.id} className="xyz">
  <p>{type.name}</p>
  <p>{type.description}</p>
  </div>
)

export default TypeCard;
