import React from "react";

const signup = () => {
  return (
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
      </form>
    </div>
  );
};

export default signup;
