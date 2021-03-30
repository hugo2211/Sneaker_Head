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
  const [commentNumber, setCommentNumber] = useState(props.commentNumber);

  const handleOpenClick = () => {
    setIsOpen(true);
    getComments(props.shoeId);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    await sendCommentToDB(props.shoeId, props.webId, comment);
    setComment("");
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

      setShoeComments(data.data[0]);
      setCommentNumber(data.data[0].length);
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
              shoeComments.map((comment, index) => {
                return (
                  <div key={`${comment.username}-${index}`}>
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
                          {`${formatDate(comment.comment_date)} ${new Date(comment.comment_date).toLocaleTimeString()}`}
                        </p>
                      </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                  </div>
                );
              })}
          </div>
          <form onSubmit={handleCommentSubmit}>
            <div className="comment-input-container">
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
                rowsMax={2}
              />
            </div>

            <button className="btn btn-block btn-dark" type="submit">
              Add Comment
            </button>
          </form>
        </div>
      ) : (
        <div className="comment-count" onClick={handleOpenClick}>
          {commentNumber} Comments
        </div>
      )}
    </div>
  );
};

export default CommentBox;
