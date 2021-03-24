import React from "react";
import "./ShoeCard.css";

const ShoeCard = ({ userName, product, price, image}) => {
    return (
      <div className="card text-center border m-auto" style={{width: "50%"}}>
        <h5 className="card-header">{userName}</h5>
        <img className="feed-img m-auto img-fluid" src={image}/>
        <div> </div>
        <div className="mt-2">{product}</div>
        <div>{price}</div>
        <div></div>
      </div>
    );
  };
  
  export default ShoeCard;