import React from "react";
import LikeButton from "../buttons/Like";
import CommentBox from "../comment/CommentBox";
import "./ShoeCard.css";

const ShoeCard = ({ userName, product, price, image}) => {
    return (
      <div className="card text-center border m-auto" style={{width: "50%"}}>
        <h5 className="card-header">{userName}</h5>
        <img className="feed-img m-auto img-fluid" src={image}/>
        <div> <LikeButton/> </div>
        <div className="mt-2">{product}</div>
        <div>{price}</div>
        <div><CommentBox/></div>
      </div>
    );
  };
  
  export default ShoeCard;