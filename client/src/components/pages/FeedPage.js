import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedPage.css";

const FeedPage = ({ history }) => {
  const [feedData, setFeedData] = useState([]);

  const getFeedData = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    const userId = localStorage.getItem("web_id");

    axios
      .get(`/api/private/feed?userid=${userId}`, config)
      .then(function (response) {
        console.log("feed data:", response.data.data[0]);
        setFeedData(response.data.data[0]);
      });
  };

  useEffect(() => {
    getFeedData();
  }, []);

  return (
    <div className="feed-page">
      <h2>Feed</h2>
      <div className="container feed-container">
        {feedData && feedData.length > 0 ? (
          feedData.map((post) => {
            return (
              <div key={post.shoe_id} className="mb-4">
                <div>{post.username}</div>
                <img className="feed-img" src={post.image_url} />
                <div>Brand: {post.brand_name}</div>
                <div>Model: {post.shoe_model}</div>
                <div>Year: {post.year}</div>
                <div>{post.status_name}</div>
              </div>
            );
          })
        ) : (
          <div>No Feed data</div>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
