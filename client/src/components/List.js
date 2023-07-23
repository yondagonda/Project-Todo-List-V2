import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';

const List = () => {
  const [allTodos, setAllTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const data = await response.json();
      const sortedData = data.sort((a, b) => a.todo_id - b.todo_id);
      console.log(sortedData);
      setAllTodos(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setAllTodos(allTodos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  return (
    <section className="flex flex-col gap-3">
      {allTodos.map((todo) => {
        return (
          <li
            className="list-none border border-black px-3 py-1.5 flex justify-between gap-6 min-w-[290px]"
            key={todo.todo_id}
          >
            <div className="text-ellipsis">{todo.description}</div>
            <div className="flex gap-3 text-sm">
              <button
                onClick={() => {
                  setEditTodo(todo);
                  setOpenEditModal(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteTodo(todo.todo_id)}>Del</button>
            </div>
          </li>
        );
      })}
      {openEditModal && (
        <EditModal
          setOpenEditModal={setOpenEditModal}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      )}
    </section>
  );
};

export default List;
