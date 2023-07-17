import React from 'react';

const EditModal = ({ setOpenEditModal }) => {
  const s = 's';

  return (
    <aside className="border border-black p-3">
      <div className="flex justify-between">
        <h1>Edit Todo</h1>
        <button onClick={() => setOpenEditModal(false)}>Close</button>
      </div>
    </aside>
  );
};

export default EditModal;
