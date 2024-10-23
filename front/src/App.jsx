import { useState, useEffect } from 'react'
import {CreateTodo} from './components/CreateTodo.jsx'
import { ShowTodo } from './components/ShowTodo.jsx'
import './App.css'


function App() {

  const [todos , setTodos] = useState([]);

    fetch('http://localhost:5000/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json);
      })
   
 
  return (
    <>
      
        <CreateTodo></CreateTodo> <br/>
        <ShowTodo 
        todos ={todos}></ShowTodo> 
      
   
    </>
  )
}

export default App
