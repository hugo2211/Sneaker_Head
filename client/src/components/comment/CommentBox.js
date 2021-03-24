import React from 'react';
import "./CommentBox.css"

const CommentList = () => {
  return (
    <div className="commentList">
        Yeahhhh I am a CommentList.
      </div>
  )
};
const CommentForm = () => {
  return (
    <div className="commentForm">
        Party Parrot time. I am a CommentForm.
      </div>
  )
};


const CommentBox = () => {

  return (
    <div className="commentBox">
      <h1>WOO My Comment Box</h1>
      <CommentList />
      <CommentForm />
    </div>
  );


};

export default CommentBox;

