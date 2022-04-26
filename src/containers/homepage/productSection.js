import React from 'react';
import { Product } from '../../components/product';


export function ProductSection(props) {
  const {products, onAdd} = props;
  console.log(products);
    return ( 
        <div>
            <h1>Products Will show here</h1>
            <div className='row col-1'>
                {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}            
            </div>  
        </div>
        
        
    );
}



