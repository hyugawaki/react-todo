import { useState, useRef } from 'react';
import './App.css';
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef()

  const handleAdd = () => {
    const name = todoNameRef.current.value
    if(name === "") return
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = ""
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div>
      <input type="text" placeholder='type me!' ref={todoNameRef} />
      <button onClick={handleAdd}>add</button>
      <button onClick={handleClear} >deleted completed todo</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
  
}

export default App
