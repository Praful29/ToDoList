import React from 'react';
import TodoItem from '../components/todo-list-item';

const TodoList = ({todos, ...props }) => {
    return (
        <div className='container'>
            {todos.map((todo) =>(
                <TodoItem key={todo.id} todo={todo} {...props} />   
            ))}

        </div>
    )
}

export default TodoList