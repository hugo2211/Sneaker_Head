import React, { useState } from "react";
import axios from 'axios';
import './Like.css';

const LikeButton = (props) => {
  const [likes, setLikes] = useState(props.numLikes);
  const [userHasLiked, setUserHasLiked] = useState(false);

  const sendLikeToDB = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.post(
        "/api/private/likes",
        {
          shoe_id: props.shoeId,
          web_id: props.webId
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  const addLike = () => {
    if (!userHasLiked) {
      setLikes(likes + 1);
      setUserHasLiked(true);
      sendLikeToDB();
    } else {
      setLikes(likes - 1);
      setUserHasLiked(false);
    }
  };

  return (
    <div>
      <button onClick={addLike} className="Likes">
        <i className="fas fa-thumbs-up" style={{ color: `${userHasLiked ? 'skyblue' : 'white'}` }}></i>
        {likes} Likes!{" "}
      </button>
    </div>
  );
};

export default LikeButton;
