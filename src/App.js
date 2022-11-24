import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentName, setCurrentName] = useState("");
  const [nameToList, setNameToList] = useState([])
  const [editIndex, setEditIndex] = useState("");
  const [editStatus, setEditStatus] = useState("add");


  // OnChange for currentInput
  const handleChange = e => {
    console.log(e.target.value);
    setCurrentName(e.target.value);
    
  }

  // Button onClick for addName to the List
const addNametoList = () => {
console.log("add some Function...")
  if(currentName === "") return null 

  if(editStatus === "edit") {
    let temp = [...nameToList]
    temp.splice(editIndex, 1, currentName)
    console.log("temp", temp);
    setNameToList([...temp])
  }else {
    console.log("add...");
    setNameToList([...nameToList, currentName]);
  }
  setCurrentName("");
  setEditIndex("");
  setEditStatus("add");
}

// for edit button 
const editCurrentName = (userName, index) => {
console.log(userName);
setCurrentName(userName);
setEditIndex(index)
setEditStatus("edit")
}


// for delete 
const deleteName= (index) => {
  let temp = [...nameToList]
  temp.splice(index,1)
  setNameToList(temp)
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
  nameToList?.length && nameToList.map((userName, i) => {
    return (
       <div className='row'>
      <span>{i + 1 + " " + userName}</span>
      <button className='btnLeftM' onClick={() => editCurrentName(userName, i)}>Edit</button> 
      <button className='btnLeftM' onClick={() => deleteName(i)}>Delete</button> 
      
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
