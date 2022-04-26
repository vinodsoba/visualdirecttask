import React, { useState } from 'react';
import styled from 'styled-components';
import { Basket } from '../basket';
import { Button } from '../button';
import { Logo } from '../logo';

const NavbarContainer = styled.div`
    width: 98%;
    height: 50px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
`;

const LoginButton = styled(Button)`
    background-color: transparent;
    border: none;

    &:hover {
        background-color: transparent;
        border: none;

        color: rgba(200, 200, 200)
    }
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Navbar(props) {
    const small = props;
    const cartlink = props;

    const [cartItems, setCartItems] = useState([]);

const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
            )
        );
    } 
    else {
        setCartItems([...cartItems, {...product, qty:1}]);
    }
}

const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1){
        setCartItems(cartItems.filter((x) => x.id !== product.id ))
    }
    else {
        setCartItems(
            cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        ));
    }
}

    return <NavbarContainer>
        <BrandContainer>
            <Logo inline />
        </BrandContainer>
        <AccessibilityContainer>
            <Button small>Get Started</Button>
            <LoginButton small>Login</LoginButton>
            <Basket  
            onAdd={onAdd} 
             onRemove={onRemove} 
             cartItems={cartItems}/>
        </AccessibilityContainer>
    </NavbarContainer>
}
