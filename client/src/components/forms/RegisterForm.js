import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";

const RegisterForm = ({
  handleCancelClick,
  goToLogin,
  closeRegisterForm,
  handleSuccess,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegisterFormSubmit = async (e) => {
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
      closeRegisterForm();
      handleSuccess("User Create! Please Login in.");
      goToLogin();
    } catch (error) {
      console.log(error.response);

      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <form className="mt-4" onSubmit={handleRegisterFormSubmit}>
      {error && <span className="error-message">{error}</span>}
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col">
            <TextField
              required
              fullWidth
              id="firstName-input"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col">
            <TextField
              required
              fullWidth
              id="lastName-input"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
      </div>
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
      <div className="pl-3 pr-3 mb-4">
        <TextField
          required
          fullWidth
          type="password"
          id="confirm-password-input"
          label="Confirm Password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 mb-4">
            <button className="btn btn-light btn-block btn-lg" type="submit">
              Create Account
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

export default RegisterForm;
