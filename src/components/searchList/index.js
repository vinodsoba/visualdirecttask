import React from 'react';
import { Product } from '../product';



export function SearchList(props) {
    const { products, onAdd, filteredItems} = props;
    //const filtered = products && products.map(product => <Product key={product.id} products={products} onAdd={onAdd}></Product>);
    return (
        <div>
            <h1>Search List</h1>
            <div className='row col-1'>
                {products.map((product) => (
                <Product key={product.id} filteredItems={filteredItems} product={product} onAdd={onAdd}></Product>
                ))}            
            </div>  
        </div>
    );
}