import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const NoteModel = ({ closeModel }) => {
  //This model is used for toggle frame switching
  //Trigger this function we use handleSubmit
  //This model is used for toggle frame switching
  //Trigger this function we use handleSubmit
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/note/add",
        {
          title,
          description,
        },
        {
          headers: {
            //adding token for headers
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        //if res data is suc go to home
        //and clost da model
        Navigate("/");
        closeModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-xl font-bold mb-4">Add New Note</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Note Title"
            className="border p-2 w-full mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            type="text"
            value={description}
            placeholder="Note Description"
            className="border p-2 w-full mb-4"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Note
          </button>
        </form>
        <button className="mt-4 text-red-500" onClick={closeModel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NoteModel;
