// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";

function App() {
const [task, setTask]=useState("")
const [todos, setTodos]=useState([
  "Abhishek", "Abhi", "Rahul"
])

function createTodo(){

}

  return (
    <>
    <h1>Best Todo App</h1>
    <input type="text" value={task} onChange={event =>{
      setTask(event.target.value)
    }}
      />
    <button onClick={createTodo}>Create Todo</button>
    </>
  );
}

export default App;
