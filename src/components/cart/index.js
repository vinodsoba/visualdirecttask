import React from 'react';
import { theme } from '../../theme';
import styled from 'styled-components';

const CartLink = styled.a`
    text-decoration: none;
    color: white;
    margin-top: 20px;

    &:hover {
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
  
`;

export function ShoppingCart(props){
    return (  
        <CartLink {...props}>{props.children}</CartLink>   
    )

}