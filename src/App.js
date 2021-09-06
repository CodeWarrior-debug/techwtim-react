import './App.css';
import Info from './components/Info'

function App() {
  return (
    <>
<Info />
<AddItem />
</>

  );
}



function AddItem(){
  const value = "default";


  return (
    <form>
      <label for="text-form">Type-something</label>
      <input type="text" value={value} id="text-form"/>
    </form>
  )
}

export default App;
