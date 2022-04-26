import React from 'react'
import { Button } from '../button';
import styled from 'styled-components';

const ProductSectionConainer = styled.div `
  display: flex;
  flex-direction: column;

`;


export function Product(props) {
    const { product, onAdd } = props;
    console.log(product);
  return (
    <ProductSectionConainer>
       <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="small"></img>
       <h2>{product.name}</h2>
       <h3>{product.price}</h3>
       <Button onClick={() => onAdd(product)} product={product} onAdd={onAdd} >Add To Cart</Button>
       
    </ProductSectionConainer>
  );
}

