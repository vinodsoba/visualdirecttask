import React from 'react'
import { Button } from '../button';

export function Product(props) {
    const { product, onAdd } = props;
    console.log(product);
  return (
    <div className='product-section'>
      <div className='row col-1'>
        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="small"></img>
       <h2>{product.name}</h2>
       <h3>{product.price}</h3>
       <Button onClick={() => onAdd(product)} product={product} onAdd={onAdd} >Add To Cart</Button>
       
    </div>
    </div>
    
  );
}

