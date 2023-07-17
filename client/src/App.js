import './App.css';
import Input from './components/Input';
import React from 'react';
import List from './components/List';

function App() {
  return (
    <div className="App flex flex-col items-center gap-4">
      <h1 className=" text-6xl pt-[5vh]">Todo List</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
