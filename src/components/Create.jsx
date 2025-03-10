import React, { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Create.css";

const Create = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");

  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
      console.log(userCredential);
    });
  };
  return (
    <div id="container">
      <h1 id="title">Create A New Account</h1>
      <form action="" onSubmit={createAccount}>
        <input
          id="email"
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="pass"
          type="text"
          placeholder="Enter Your Password"
          onChange={(e) => setpass(e.target.value)}
        />
        <button type="submit" id="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Create;
