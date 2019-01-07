import React from 'react'


const ProductCard = ({product}) => (
  <div key={product.id} className="xyz">
  <h3>{product.name}</h3>
  <p>{product.description}</p>
  <p>{product.price}</p>
  <p>{product.ratings}</p>
  <p>{product.rfid}</p>
  </div>
)

export default ProductCard;
