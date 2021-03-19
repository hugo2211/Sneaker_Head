import React, { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import './ChatPage.css';

const ChatPage = () => {
  const [error, setError] = useState("");
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    getChatProjectId();
  }, []);

  const getChatProjectId = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.get("/api/private", config);

      console.log(data);
      setProjectId(data.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="chat-page">
      {error && <span className="error-message">{error}</span>}
      {projectId ? (
        <ChatEngine
          projectID={projectId}
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
          height="100vh"
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ChatPage;

//365fe33f-2342-4d93-abf4-fe0036867e62
