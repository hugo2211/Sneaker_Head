import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="border pt-5 pb-5 container mt-5 text-center">
        <h1>Sneaker Head</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate
          odio ut enim blandit volutpat. Donec ultrices tincidunt arcu non
          sodales neque sodales ut etiam.
        </p>
        <div>
          <Link className="btn btn-dark mr-4" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-dark" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
