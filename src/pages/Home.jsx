import axios from "axios";
import React from "react";
import { useState } from "react";

function Home() {
  const oauth = axios.create({
    baseURL: "http://localhost",
    withCredentials: true,
  });

  const logOut = async () => {
    const url = "http://localhost/logout"
    post(url)
  };

  const SayHello = async () => {
    const response = await oauth.get("/user/demo/sayHello");
    console.log(response);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button onClick={logOut} type="submit" className="btn btn-primary">
          Logout
        </button>
        <button onClick={SayHello} type="submit" className="btn btn-primary">
          SayHello
        </button>
      </div>
    </>
  );
}

function post(path, params, method='post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

export default Home;
