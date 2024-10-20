import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', width: '80%', marginRight: '5px' }}
      />
      <button onClick={addTodo} style={{ padding: '10px' }}>
        Add
      </button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                color: 'white',
                backgroundColor: 'red',
                border: 'none',
                borderRadius: '3px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
