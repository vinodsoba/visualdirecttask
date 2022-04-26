import React from 'react';
import { Product } from '../../components/product';
import { SectionTitle, ServicesContainer } from '../../components/sectionTitle';


export function ProductSection(props) {
  const {products, onAdd} = props;
  console.log(products);
    return ( 
        <div>
            <ServicesContainer className='mb2'>
            <SectionTitle>Whats New</SectionTitle>
            </ServicesContainer>
    
            <div className='row col-1'>
                {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}            
            </div>  
        </div>
        
        
    );
}



