import React, {useState} from 'react';
import styled from 'styled-components';
import { SearchList } from './../searchList';


const ProductListing = styled.div`
  display: flex;
`;

export function SearchBar({ products }) {
 
  const [searchField, setSearchField] = useState("");
  
  const filteredPersons = products && products.filter(
    product => {
      return (
        product.name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        product.id
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );


  const handleChange = e => {
    var input = document.forms["form1"]["my-form"].value;
    const x = document.getElementsByClassName("listings");
    if( input.length === 0) {
      x.style.display = 'none';
      setSearchField(e.target.value);
      console.log("entered some text", setSearchField);
    }
    else {
      console.log('the block has been displayed');
    }
   
  };

  function searchList() {
    return (
      <div>
        <SearchList filteredPersons={filteredPersons} />
      </div>
    );
  }


  return (
    
      <div>
         <h2 className="f2">Search your Product</h2>
         <form name="form1">
         <input 
          className="search-bar"
          name="my-form"
          type = "search" 
          placeholder = "Search Product" 
          onChange = {handleChange}
        /></form>

        <div className='listings'>
          <ProductListing>
         
          </ProductListing>
          </div>
      </div>   
      
      
   
  )
  
}

