// import UserTodoInput from "./UserTodoInput"

import { useEffect, useState } from "react"
import Completed from "./Completed"
function ToDoList({todos, setTodos}){
    // const localStorageReturn = localStorage.getItem(todos)

    function deleteTodoItem(todo){
        console.log("deletefunc")
        todos = todos.filter((x) => x.id !== todo.id)
        setTodos(todos)
        localStorage.removeItem(todo)
    }

    const [todoButtonTextState, setTodoButtonTextState] = useState("Not Done!")

        // function changeText(){
            
        //     setTodoButtonTextState("mark as incomplete")
            
        // }

    function updateTodoItem(todo){
        console.log("updateItem")
        const todosUpdaterParse = JSON.parse(localStorage.getItem("todos"))
        console.log("tup", todosUpdaterParse)
            todosUpdaterParse.map((x) => {
            if (x.isDone === false){
                x.isDone = true;
                setTodoButtonTextState("Done!")
                //change button text
            }else{
                x.isDone = false
                setTodoButtonTextState("Not Done!")
            }
            localStorage.setItem('todos', JSON.stringify(todosUpdaterParse))
            
        })
    }

    // useEffect(() => {
    //     const localStorageReturn = JSON.parse(localStorage.getItem(todos));
    //         setTodos(localStorageReturn);
    // }, []);

    return(
    <ul>
        {todos.map(todo => (
        <li key={todo.id}>
            {todo.text}

            {/* this button needs to move the list item to completed. */}
            <button onClick= {(() => updateTodoItem(todo))}>{todoButtonTextState}</button>

            {/* this button needs to delete the list item from the storage, the array, the lists. */}
            <button onClick={(() => deleteTodoItem(todo))}>delete</button>
        </li>
    ))}
    </ul>
    )
}

export default ToDoList




