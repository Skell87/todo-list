import { useState } from "react"
import ToDoList from "./ToDoList"

function UserTodoInput({todos, setTodos}){

    const [todoText, setTodoText] = useState("")

    function handleTodoChange(event){
        setTodoText(event.target.value)
    }

    // wrapper function for onCLick information submission and routing
    function handleSubmit(){
        const newTodo = {
            id: todos.length + 1,
            text: todoText,
            isDone: false
        }
        
        // let newArrayWithAddedItem = []

        // newArrayWithAddedItem = [...todos, newTodo]

        setTodos([...todos, newTodo])
        
        setTodoText('')   

        

    }
    

    return (<div>
        <input value={todoText} onChange={handleTodoChange}></input>
        <button onClick={handleSubmit}>New Todo</button>
        
    </div>);
    
}

export default UserTodoInput