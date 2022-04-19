import TodoList from "../todo-list/TodoList";
import './Todo.css'
import TodoCreate from "../todo create/todoCreate";
import { useState } from "react";

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id: 1, title:'Eat'},
        { id: 1, title:'Sleep'},
        { id: 1, title:'Code'},
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }


    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo