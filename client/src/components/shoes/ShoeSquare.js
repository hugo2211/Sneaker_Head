import React from "react";
import LikeButton from "../buttons/Like";
import "./ShoeSquare.css";
const ShoeSquare = ({ userName, product, price, image}) => {
  return (
    <div className="shoe-container">
      <div> {userName} </div>
      <img className="feed-img" src={image} />
      <div> <LikeButton/></div>
      <div className="mt-2">{product}</div>
      <div>{price}</div>
    </div>
  );
};
export default ShoeSquare;
