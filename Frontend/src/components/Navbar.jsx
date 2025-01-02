import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const Navbar = () => {
    const {user} = useAuth()
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white ">
      <div className="text-xl font-bold">
        <Link to="/">Note App</Link>
      </div>
      <input
        type="text"
        placeholder="Seach a text.."
        className="bg-gray-600 px-4 py-2 rounded"
      />
      <div>
        {!user ? (
          <>
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
              Login
            </Link>
            <Link to="/signup" className="bg-green-500 px-4 py-2 rounded mr-4">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="mr-4 text-white">{user.name}</span>
            <button className="bg-red-500 px-4 py-2 rounded mr-4">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
