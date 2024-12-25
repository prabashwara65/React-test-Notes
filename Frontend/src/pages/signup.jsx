import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="******" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
