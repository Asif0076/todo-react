import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentName, setCurrentName] = useState("");
  const [nameToList, setNameToList] = useState([])
  const [editIndex, setEditIndex] = useState("");
  // const [editStatus, setEditStatus] = useState("add");


  // OnChange for currentInput
  const handleChange = e => {
    console.log(e.target.value);
    setCurrentName(e.target.value);
    
  }

  // Button onClick for addName to the List
const addNametoList = () => {
console.log("add some Function...")
  if(currentName === "") return null 

  if(editIndex) {
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
  // setEditStatus("add");
}

// for edit button 
const editCurrentName = (userName, index) => {
console.log(userName);
setCurrentName(userName);
setEditIndex(index)
// setEditStatus("edit")
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
      <h1>Todo App for UserName</h1>
    <div className='userAndAdd'>
    <input className='inputUser' placeholder='Enter UserName' value={currentName} onChange= {handleChange} /><br/><br/>
    <button className='addName' onClick={addNametoList}>ADD (<i>UserName</i>)</button>
    </div>

<div className='nameList'>
<div>
<h2><u>Name List</u></h2>

{
  nameToList?.length && nameToList.map((userName, i) => {
    return (
       <div className='row'>
      <span>{i + 1 + " . " + (userName.length > 5 ? userName.substr(0,30) : userName)}</span>
          <div className='adddeletebtn'>
            <button className='btnLeftM1' id='btn1'  onClick={() => editCurrentName(userName, i)}>Edit</button> 
            <button className='btnLeftM2' id='btn2' onClick={() => deleteName(i)}>Delete</button> 
          </div>
      </div>
    
    ) 
  })
}
</div>
</div>

<div className='footer'>Asif Nawaz - 31173 - Assignment - 5 </div>
    </div>
  );
}
 
export default App;
