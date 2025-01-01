import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8080/auth/login", {
        email,
        password,
      });
      console.log(response);
      if(response.data.succcess){
        localStorage.setItem('token' , response.data.token )
        navigate('/')
      }
    } catch (error) {
      console.log(response.error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-teal-200 min-h-screen">
      <div className="border shadow p-6 w-80 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 ">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="w-full bg-red-500 text-white py-2" type="submit">
              Login
            </button>
            <p> Don't Have any Account? <Link to='/signup' className="text-blue-600 underline">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
