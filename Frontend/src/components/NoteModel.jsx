import React, { useState } from "react";

const NoteModel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-xl font-bold mb-4">Add New Note</h2>
        <form>
          <input
            type="text"
            value={title}
            placeholder="Note Title"
            className="border p-2 w-full mb-4"
            onChange={(e) => e.target.value(setTitle)}
          />

          <textarea
            // type="text"
            value={description}
            placeholder="Note Description"
            className="border p-2 w-full mb-4"
            onChange={(e) => e.target.value(setDescription)}
          />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Note
          </button>
        </form>
        <button className="mt-4 text-red-500">Cancel</button>
      </div>
    </div>
  );
};

export default NoteModel;
