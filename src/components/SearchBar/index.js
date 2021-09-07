import { useState } from 'react'

function SearchBar(props){
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");

  const searchButtonPressed = () => {
    console.log('Name: ' + name, 'Price: ' + price, 'Type: ' + type, 'Brand: ' + brand);
    props.callback({name:name, price:price, type:type, brand:brand})
  }

  return (
    <>
      <h2>Search for an Item</h2>
      <form>
        {/* Name */}
        <label for= 'name-field'>Name:</label>
        <input 
        id='name-field'
        type='text' 
        value={name} 
        onChange={ (e) => setName(e.target.value)}>
        </input>
        {/* Price */}
        <label for= 'price-field'>Max Price:</label>
        <input id='price-field' type='number' value={price}
        onChange={ (e) => setPrice(e.target.value)}>
        </input>
        {/* Type */}
        <label for= 'type-field'>Type:</label>
        <input id='type-field' type='text' value={type}
        onChange={ (e) => setType(e.target.value)}>
        </input>
        {/* Brand */}
        <label for= 'brand-field'>Brand:</label>
        <input id='brand-field' type='text' value={brand}  
        onChange={ (e) => setBrand(e.target.value)}>
        </input>
      </form>

      <button type="button" onClick={searchButtonPressed} >Search Now </button>

    </>
  )
}

export default SearchBar;