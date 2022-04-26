import React, {useState} from 'react';
import { SearchList } from './../searchList';

export function SearchBar(props) {
 
  const [searchField, setSearchField] = useState("");
  const {products, onAdd} = props;
  const filteredPersons = products.filter(
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
    setSearchField(e.target.value);
    console.log("entered some text", setSearchField);
  };

  function searchList() {
    return (
      <div>
        <SearchList filteredPersons={filteredPersons} products={products} onAdd={onAdd}/>
      </div>
    );
  }


  return (
    
      <div>
         <h2 className="f2">Search your Product</h2>
         <input 
          className="search-bar"
          type = "search" 
          placeholder = "Search Product" 
          onChange = {handleChange}
        />
          {searchList()}
      </div>   
   
  );
  
}

