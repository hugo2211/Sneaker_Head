import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./RegisterPage.css";

const RegisterPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          password,
        },
        config
      );

      console.log(data);
      //localStorage.setItem("authToken", data.token);
      history.push("/login");
    } catch (error) {
      console.log(error.response);

      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="container border pt-5 pb-5 mt-5 register-container">
        <h2 className="text-center">Register</h2>
        {error && <span className="error-message">{error}</span>}
        <form onSubmit={handleRegister}>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              required
              id="confirmPassword"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button className="btn btn-light mr-3" type="submit">Create Account</button>
          <Link className="btn btn-outline-light" to="/">Go Back</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;