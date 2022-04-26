import React from 'react';
import { Button } from '../button';

function Card({product}) {
  return(
    <div className="product-card-wrapper">
      <div className='product-card'>
        <h2>{product.name}</h2>
        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="small"></img>
        <p>{product.price}</p>
        <Button product={product}>Add To Cart</Button>
      </div>
    </div>
  );
}

export default Card;