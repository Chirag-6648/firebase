import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");
  const [user, setUser] = useState(null);

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const User = userCredential.user;
        setUser(User);
      })
      .catch((error) => {
        seterror("invalied email and password");
      });
    if (user) {
      console.log(user);
    }
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      return () => unsubscribe();
    });
  });

  return (
    <div id="container">
      <h1 id="title">Login</h1>
      <form action="" onSubmit={Login}>
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
        <p>{error}</p>
        <button type="submit" id="submit">
          Login
        </button>
      </form>
      <Link to="/createAccount">
        <button id="submit">Create Account</button>
      </Link>
      {user ? (
        <div>
          <h3>Welcome , {user.email}</h3>
          <button onClick={Logout} id="submit">
            Logout
          </button>
        </div>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default Login;
