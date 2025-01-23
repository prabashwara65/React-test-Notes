import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NoteModel from "../components/NoteModel";

const Home = () => {
  const [isModelOpen, setModelOpen] = useState(false);

  const closeModel = () => {
    setModelOpen(false);
  };
  return (

    
    <div className="bg-gray-600 min-h-screen">
      <Navbar />
      <button
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full"
        onClick={() => setModelOpen(true)}
      >
        +
      </button>
      {isModelOpen && <NoteModel closeModel={closeModel} />}
    </div>
  );
};

export default Home;
