import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="******"
            />
          </div>
          <div className="my-4 ">
            <button className="w-full bg-teal-600 text-white py-2">
              Sign Up
            </button>
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
