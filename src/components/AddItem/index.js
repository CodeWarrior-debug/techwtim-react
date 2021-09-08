import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({ name: name, price: price, type: type, brand: brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  // console.log('Name: ' + name, 'Price: ' + price, 'Type: ' + type, 'Brand: ' + brand);
  // props.callback({name:name, price:price, type:type, brand:brand})

  return (
    <div className="container">
      <div className="row">
        <h2>Add an Item</h2>
          {/* Name */}
          <label for="name-field">Name:</label>
          <input
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {/* Price */}
          <label for="price-field">Max Price:</label>
          <input
            id="price-field"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          {/* Type */}
          <label for="type-field">Type:</label>
          <input
            id="type-field"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
          {/* Brand */}
          <label for="brand-field">Brand:</label>
          <input
            id="brand-field"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
      </div>

      <div className="row">
        <button type="button" onClick={addItemButtonPressed}>
          Add Item{" "}
        </button>
      </div>
    </div>
  );
}

export default AddItem;
