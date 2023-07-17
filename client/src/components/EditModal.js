import React from 'react';

const EditModal = ({ setOpenEditModal, editTodo, setEditTodo }) => {
  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { editTodo };
      const response = await fetch(
        `http://localhost:5000/todos/${editTodo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <aside className="border border-black p-3 ">
      <div className="flex justify-between">
        <h1>Edit Todo</h1>
        <button onClick={() => setOpenEditModal(false)}>Close</button>
      </div>
      <div className="flex flex-col gap-3 pt-4">
        <label htmlFor="editTodo"></label>
        <input
          id="editTodo"
          type="text"
          value={editTodo.description}
          onChange={(e) =>
            setEditTodo({
              todo_id: editTodo.todo_id,
              description: e.target.value,
            })
          }
          className="border-black border"
        />
        <button onClick={(e) => updateTodo(e)}>Confirm Edits</button>
      </div>
    </aside>
  );
};

export default EditModal;
