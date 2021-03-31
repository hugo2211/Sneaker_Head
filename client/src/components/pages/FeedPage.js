import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedPage.css";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LikeButton from "../buttons/LikeButton";
import CommentBox from "../general/CommentBox";

const useStyles = makeStyles(() => ({
  shoePost: {
    maxWidth: 300,
  },
  username: {
    marginBottom: "3px",
  },
  seperator: {
    backgroundColor: "white",
  },
  italic: {
    fontStyle: "italic",
  },
}));

const FeedPage = ({ history }) => {
  const classes = useStyles();
  const [feedData, setFeedData] = useState([]);
  const [search, setSearch] = useState("");

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

  const onSearchSubmit = async (event) => {
    event.preventDefault();

    console.log(feedData);
    
  }

  const handleUsernameClick = (userId) => {
    history.push(`/profile/${userId}`);
  };

  useEffect(() => {
    getFeedData();
  }, []);

  return (
    <div className="feed-page">
      <h2 className="centered-text">Feed</h2>

      <form className="centered-text" onSubmit={onSearchSubmit}>
        <TextField
          required
          id="search-input"
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-light">Search</button>
      </form>

      <div className="container feed-container">
        <div className="row">
          {feedData && feedData.length > 0 ? (
            feedData.map((post) => {
              return (
                <div
                  key={post.shoe_id}
                  className={`col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-4`}
                >
                  <div className={classes.shoePost}>
                    <div
                      className={`${classes.username} username`}
                      onClick={() => handleUsernameClick(post.web_id)}
                    >
                      {post.username}
                    </div>
                    <img
                      alt={`${post.brand_name} ${post.shoe_model} ${post.year}`}
                      style={{ height: "200px", width: "300px" }}
                      src={post.image_url}
                    />
                    <LikeButton
                      numLikes={post.likes}
                      shoeId={post.shoe_id}
                      webId={localStorage.getItem("web_id")}
                    />
                    <div className={classes.italic}>{post.description}</div>

                    <CommentBox
                      shoeId={post.shoe_id}
                      webId={localStorage.getItem("web_id")}
                      commentNumber={post.comments}
                    />

                    <hr className={classes.seperator} />
                    {post.status_name === "Trade" ||
                    post.status_name === "Sell" ? (
                      <div>Status: For {post.status_name}</div>
                    ) : null}
                    <div>Brand: {post.brand_name}</div>
                    <div>Model: {post.shoe_model}</div>
                    <div>Year: {post.year}</div>
                    {post.size && <div>Size: {post.size}</div>}
                    {post.shoe_condition && (
                      <div>Condition: {post.shoe_condition}</div>
                    )}
                    {post.price && <div>Price: ${post.price}</div>}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Feed data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
