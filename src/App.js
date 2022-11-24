import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentName, setCurrentName] = useState("");
  const [nameToList, setNameToList] = useState([])

  // OnChange for currentInput
  const handleChange = e => {
    console.log(e.target.value);
    setCurrentName(e.target.value);
    
  }

  // Button onClick for addName to the List
const addNametoList = () => {
  setNameToList([...nameToList, currentName]);
  setCurrentName("");
}

// for edit button 
const editCurrentName = (userName) => {
console.log(userName);
setCurrentName(userName);
}


console.log("NameList", nameToList);

  return (
    <div className="App">
      <h1>Todo App</h1>

    <input placeholder='Name' value={currentName} onChange= {handleChange} />
<br/> <br/>
    <button className='addName' onClick={addNametoList}>ADD NAME</button>

<br /><br />




<div className='nameList'>
<div>
<h2><u>Name List</u></h2>
{
  nameToList ?.length && nameToList.map((userName, i) => {
    return (
       <div className='row'>
      <span>{i + 1 + " " + userName}
      <button className='btnLeftM' onClick={() => editCurrentName(userName)}>Edit</button> </span>
      </div>
      
    ) 
  })
}
</div>
</div>


    </div>
  );
}

export default App;
