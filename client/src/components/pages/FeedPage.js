import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../general/Header";
import ShoeSquare from "../shoes/ShoeSquare";
import airJordan1MidHyperRoyal from "../../images/airJordan1MidHyperRoyal.jpg";
import "./FeedPage.css";


const feed = [{
  "id":1,
  "shoe": "adidas",
  "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
  "likes": 1110, 
  "comment": "Check out my new retro kicks" 
},
{
  "id":2,
  "shoe": "Reebok",
  "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
  "likes": 700, 
  "comment": "Found these classics in the back of my closet!" 
}, 
{
  "id":3,
  "shoe": "Air Jordans",
  "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
  "likes": 1200, 
  "comment": "Finally checking these off my wishlist" 
}]

const FeedPage = (props) => {
  //const [feedData, setFeedData] = useState([]);

  console.log(props);

  return (
    <div className="feed-page">
      <Header history={props.history} />
      <h2>Feed</h2>
    </div>
  );
};

export default FeedPage;
