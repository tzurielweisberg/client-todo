// src/components/CreateTodo.js
import React, { useState } from 'react';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new Todo
    const newTodo = {
      title,
      description,
      completed: false,
    };

    const apiUrl = 'http://localhost:3000'; // Replace with the correct hostname or IP address

    // Send a POST request to create the Todo
    fetch(`${apiUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => {
        if (response.ok) {
          setTitle('');
          setDescription('');
        } else {
          console.error('Error creating Todo');
        }
      })
      .catch((error) => console.error('Error creating Todo', error));
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTodo;

