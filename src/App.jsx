import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import All from './All'
import Completed from './Completed'
import UserTodoInput from './UserTodoInput'
import 'reactjs-popup/dist/index.css'

// the function here is switching between different app tabs and the return sets an onclick to change between them.
// on the userTodoInput page i have a function that takes user input, its represented under the todowindow in a div.
// I need to do a couple things with the user input, i need to...
// store it in local storage and manipulate it.
// represent the data on page.
function App() {

    // const whatWeGetFromLocalStorage = JSON.parse(localStorage.getItem(todos))
    // const initialState = whatWeGetFromLocalStorage ? whatWeGetFromLocalStorage : []
    // const initialState = whatWeGetFromLocalStorage ?? []
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
    const [view, setView] = useState("ToDoList")

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])

  function listSelector(){
    console.log("view", view)
    switch(view){
      case "ToDoList":
        return <ToDoList todos={todos} setTodos={setTodos} />
        
      case "Completed":
        return <Completed />
        
      case "All":
        return <All />
        
    }
  }
  console.log("todos array:", todos)
  const display = listSelector();

  return (
    <div className='mainBody'>
     <div className='toDoBody'>
      <h1>todo list</h1>
      <div className='menu'>
        <button className='button' onClick={(() => setView("ToDoList"))}>todo</button>
        <button className='button' onClick={(() => setView("Completed"))}>completed</button>
        <button className='button' onClick={(() => setView("All"))}>all</button>
      </div>
      
      <div className='toDoWindow'>
        {display}
      </div>
      <UserTodoInput todos={todos} setTodos={setTodos} />
     </div>
    </div>
  )
}

export default App
