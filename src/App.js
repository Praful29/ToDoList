import React, {useState} from 'react';
import './App.css';
import AddToDo from './components/Add-Todo';
import TodoList from './components/todo-list';
import Completed from './components/completed';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(newTodo) {
    setTodos([...todos, newTodo]);
  }

  const markCompleted = (todoId) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: true };
      }
      return todo;
    }));
  }

  const deleteTodo = (todoId) => {
    setTodos([...todos].filter((todo) => todo.id !== todoId));
  }
  return (
    <>
    <div className="App"> ToDo List </div>
    <AddToDo add={handleAdd}/>
    <TodoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo}/>
    <div className="App">second Div</div>
    
    <Completed todos={todos}/>
    </>

  );
}

export default App;
