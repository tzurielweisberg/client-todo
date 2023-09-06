// src/App.js
import React from 'react';
import './App.css';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>CRUD API UI</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;

