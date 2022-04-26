import React from 'react';
import { useState } from 'react';
import { TopSection } from './topSection';
import styled from 'styled-components';
import { ServicesSection } from './servicesSection';

import data from './../../data';
import { Basket } from '../../components/basket';
import { ProductSection } from './productSection';






const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
`;

function Homepage() {
const {products} = data;
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

console.log(products);
    return ( 
        <PageContainer>
             <TopSection products={products} onAdd={onAdd} /> 
             <ProductSection products={products} onAdd={onAdd}/>        
             <ServicesSection />
             <Basket 
             onAdd={onAdd} 
             onRemove={onRemove} 
             cartItems={cartItems}
             />
        </PageContainer>  
     );
}

export default Homepage;