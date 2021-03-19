import React from "react";
import ShoeSquare from "../shoes/ShoeSquare";
import airJordan1MidHyperRoyal from "../../images/airJordan1MidHyperRoyal.jpg";
import nikeDunkHighSpSyracuse from "../../images/nikeDunkHighSpSyracuse.webp";
import "./Trending.css";
//import Image from "../../../public/images/airJordan1MidHyperRoyal.jpg"

const Trending = () => {
  return (
    <div className="trending-page">
      <h2>Feed</h2>
      <div className="shoe-carosel">
        
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />

      </div>
    </div>
  );
};

export default Trending;
