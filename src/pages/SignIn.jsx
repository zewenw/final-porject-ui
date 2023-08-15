import React from "react";
import { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  const onChange = (e) => {
    e.preventDefault();
    console.log("onChange");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="username"
            placeholder="username"
            id="username"
            value={username}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button className="btn btn-primary">Primary</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
