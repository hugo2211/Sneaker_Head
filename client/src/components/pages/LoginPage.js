import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        {
          username,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      console.log(data);
      //localStorage.setItem("authToken", data.token);
      history.push("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="container border pt-5 pb-5 mt-5 login-container">
        <h2 className="text-center">Login</h2>
        {error && <span className="error-message">{error}</span>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="form-control"
              type="text"
              required
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              required
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="btn btn-light mr-3" type="submit">Login</button>
          <Link className="btn btn-outline-light" to="/">Go Back</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
