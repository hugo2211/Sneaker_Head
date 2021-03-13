import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../general/Header";
import ShoeSquare from "../shoes/ShoeSquare";
import airJordan1MidHyperRoyal from "../../images/airJordan1MidHyperRoyal.jpg";
import "./FeedPage.css";

const FeedPage = ({history, props}) => {
    return ( 
    <div className="feed-page">
      <Header history={history} />
      <h2>Feed</h2>

<div className="card">
<div className="img-container">
  <img alt={props.shoe} src={props.image} />
</div>
<div className="content">
  <ul>
    <li>
      <strong>Name:</strong> {props.name}
    </li>
    <li>
      <strong>Occupation:</strong> {props.occupation}
    </li>
    <li>
      <strong>Location:</strong> {props.location}
    </li>
  </ul>
</div>
<span onClick={() => props.removeFriend(props.id)} className="remove">
  𝘅
</span>
</div>
</div>
     );
}
 
export default FeedPage;