import React from "react";


const TodoItem = ({todo, markCompleted, deleteTodo}) =>{
    const handleComplete = (todoId) =>{
        markCompleted(todoId);
    }
    return (
        <div className="container">
            <div className={`checkbox  ${todo.completed && "checked"}`}>
                <input type="checkbox" id={todo.id} defaultChecked={todo.completed} onChange={()=>handleComplete(todo.id)}/>
           
            <label data-testid="todo-label" htmlFor={todo.id}>
                {todo.content}
            </label>
            </div>
            <div>
                <button className="btn btn-danger" onClick={()=> deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem