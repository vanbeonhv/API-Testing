"use strict";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const userlogined = useSelector((state) => state.userlogined);
  const setValueForUser = (key, value) => {
    const newVal = { ...user, [key]: value };
    setUser(newVal);
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: user });
  };
  useEffect(() => {
    if (userLogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);

  return (
    <div>
      <form>
        <label htmlFor="username">User name</label>
        <input
          id="username"
          onChange={(e) => setValueForUser("username", e.target.value)}
          type="text"
        />
        <label>Password</label>
        <input
          id="password"
          onChange={(e) => setValueForUser("password", e.target.value)}
          type="password"
        />
        <button
          type="button"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
