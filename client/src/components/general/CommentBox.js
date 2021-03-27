import React, { useState, useEffect, useRef } from "react";
import { Divider, Avatar, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import "./CommentBox.css";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const CommentBox = (props) => {
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoeComments, setShoeComments] = useState([]);

  const handleOpenClick = () => {
    setIsOpen(true);
    getComments(props.shoeId);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log("comment submmitted");
    sendCommentToDB(props.shoeId, props.webId, comment);
  };

  const getComments = async (shoe_id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `/api/private/comments?shoeid=${shoe_id}`,
        config
      );

      console.log(data.data[0]);
      setShoeComments(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendCommentToDB = async (shoe_id, web_id, shoe_comment) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.post(
        "/api/private/comments",
        {
          shoe_id,
          web_id,
          shoe_comment,
        },
        config
      );

      console.log(data);
      getComments(props.shoeId);
    } catch (error) {
      console.log(error);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div>
      {isOpen ? (
        <div ref={wrapperRef}>
          <div className="border comment-container">
            {shoeComments.length > 0 &&
              shoeComments.map((comment) => {
                return (
                  <div>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                      </Grid>
                      <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                          {comment.username}
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          {comment.shoe_comment}{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          {comment.comment_date}
                        </p>
                      </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                  </div>
                );
              })}
          </div>
          <form onSubmit={handleCommentSubmit}>
            <TextField
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              variant="outlined"
              id="post-input"
              label="Comment"
              fullWidth
              placeholder="Write comment here"
              multiline
              rows={2}
              rowsMax={4}
            />
            <button className="btn btn-block btn-dark" type="submit">
              Add Comment
            </button>
          </form>
        </div>
      ) : (
        <div className="comment-count" onClick={handleOpenClick}>{props.commentNumber} Comments</div>
      )}
    </div>
  );
};

export default CommentBox;
