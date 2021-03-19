import React from "react";
import LikeButton from "../inputs/Like";
import "./ShoeCard.css";

const ShoeCard = ({ userName, product, price, image}) => {
    return (
      <div className="card text-center" style={{width: "24rem"}}>
        <h5 className="card-header">{userName}</h5>
        <img className="feed-img" src={image} />
        <div> <LikeButton/></div>
        <div className="mt-2">{product}</div>
        <div>{price}</div>
      </div>
    );
  };
  
  export default ShoeCard;