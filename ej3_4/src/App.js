import './App.css';
import {useState} from 'react'

function App() {
  let [num, setNum] = useState(1)

  function añadir(){
    setNum(num + 1)
  }

  function restar(){
    setNum(num - 1)
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={añadir}>+</button>
      <button onClick={restar}>-</button>
    </>
  );
}

export default App;
