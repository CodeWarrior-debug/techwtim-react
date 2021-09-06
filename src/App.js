import "./App.css";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  return (
    <>
      <Info title="Inventory" />
      <AddItem title="goodness" text="Tim" number={2} />
      <AddItem text="joe" />
      <AddItem />
      <ButtonState />
    </>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type-something</label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
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

  function Data(props) {
    return (
      <div>
        <Data title={title} count={count} />
        <p>Title: {props.title}</p>
        <p>Count: {props.count}</p>
      </div>
    );
  }

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
