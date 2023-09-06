// src/components/TodoList.js
import React, { useEffect, useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const apiUrl = 'http://localhost:3000'; // Replace with the correct hostname or IP address

  useEffect(() => {
    // Fetch Todos and update the state
    fetch(`${apiUrl}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching Todos', error));
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            Title: {todo.title}, Description: {todo.description}, Completed: {todo.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

