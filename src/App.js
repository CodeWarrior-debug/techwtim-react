import "./App.css";
import Info from "./components/Info";
import SearchBar from "./components/SearchBar";
import AddItem from "./components/AddItem";
import ItemsDisplay from "./components/ItemsDisplay";
import { useState } from "react";
import styled from 'styled-components';

const Title = styled.h1`
color: ${(props) => (props.color ? props.color : "blue")};
text-align: center;
`;

function App() {
  const [data, setData] = useState({ items: []});

  const updateFilters = (searchParams) => {
    setData(searchParams)};

    const addItemToData = (item) => {
      let items = data["items"];
      items.id= items.length;
      items.push(item);
      setData({ items: items });
      console.log(data);
    }

  return (
    <div className='container'>
    {/* <div className = 'row'> */}
    <Title color='red' >The Boss Store</Title>
    {/* </div> */}
    <div className='App'>
      <Info title="Inventory" />
      <SearchBar callback={updateFilters}/>

      {/* <p>Name: {"name" in data ? data["name"] : "No data to display"} </p>
      <p>Type: {"type" in data ? data["type"] : "No data to display"} </p>
      <p>Max Price: {"price" in data ? data["price"] : "No data to display"} </p>
      <p>Brand: {"brand" in data ? data["brand"] : "No data to display"}</p> */}

      <AddItem addItem={addItemToData}/>
      <ItemsDisplay items={data["items"]}/>
      <ButtonState />

    </div>
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("New Title") ;
  };

  const updateCounterClicked = () => {
    setCount(count + 1) ;
  };

  return (
    <>
      <p>Title: {title} </p>
      <p>Counter: {count} </p>
      <button onClick={updateTitleClicked}>Update Title </button>
      <button onClick={updateCounterClicked}>Update Count</button>
    </>
  );
}

export default App;
