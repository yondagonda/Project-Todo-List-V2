import React, { useState } from 'react';

const Input = () => {
  const [todoInput, setTodoInput] = useState('');

  const onAddTodo = async (e) => {
    e.preventDefault();

    try {
      const body = { todoInput };
      console.log(body);
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <label htmlFor="addTodo"></label>
      <input
        id="addTodo"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="border border-black"
      />

      <button onClick={onAddTodo} className="border border-black px-10 py-1.5">
        Add
      </button>
    </>
  );
};

export default Input;
