import React from "react";
import "./ShoeSquare.css";

const ShoeSquare = ({ product, price, image}) => {
  return (
    <div className="shoe-container">
      <img className="feed-img" src={image} />
      <div className="mt-2">{product}</div>
      <div>{price}</div>
    </div>
  );
};

export default ShoeSquare;
