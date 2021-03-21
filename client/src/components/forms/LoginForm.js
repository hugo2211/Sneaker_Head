import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";

const LoginForm = ({ handleCancelClick, history, message }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginFormSubmit = async (e) => {
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
      localStorage.setItem("web_id", data.user.web_id);

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
    <form className="mt-4" onSubmit={handleLoginFormSubmit}>
      {message && <span className="register-message">{message}</span>}
      {error && <span className="error-message">{error}</span>}
      <div className="pl-3 pr-3 mb-4">
        <TextField
          required
          fullWidth
          id="username-input"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="pl-3 pr-3 mb-4">
        <TextField
          required
          fullWidth
          type="password"
          id="password-input"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 mb-4">
            <button className="btn btn-light btn-block btn-lg" type="submit">
              Login
            </button>
          </div>
          <div className="col-md-6 col-12">
            <button
              className="btn btn-outline-light btn-lg btn-block"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
