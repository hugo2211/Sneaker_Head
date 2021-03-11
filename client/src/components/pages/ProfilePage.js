import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../general/Header";

const ProfilePage = ({ history }) => {
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const fetchUserData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.get(`/api/private`, config);

      console.log(data);
      setUserInfo(data.data);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("authToken");
      setError("You are not authorized please login");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Header history={history} />
      <div>
        <h2 className="text-center">Profile Page</h2>
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
};

export default ProfilePage;
