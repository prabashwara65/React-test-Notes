import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-teal-200 min-h-screen">
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4 ">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Password
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="****"
            />
          </div>

          <div>
            <button className="w-full bg-red-500 text-white py-2" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
