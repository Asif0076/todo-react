import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentInput, setCurrentInput] = useState("");
  const [inputList, setInputList] = useState([])

  const handleChange = e => {
    console.log(e.target.value);
    setCurrentInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

    <input placeholder='Name' value={currentInput} onChange= {handleChange} />
<br/> <br/>
    <button className='addName' onClick={addNametoList}>ADD NAME</button>

<br /><br />
<h2>Name List</h2>

    </div>
  );
}

export default App;
