import React from "react";
import ShoeSquare from "../shoes/ShoeSquare";
import ShoeCard from "../shoes/ShoeCard"
import airJordan1MidHyperRoyal from "../../images/airJordan1MidHyperRoyal.jpg";
import nikeDunkHighSpSyracuse from "../../images/nikeDunkHighSpSyracuse.webp";
import "./Trending.css";
//import Image from "../../../public/images/airJordan1MidHyperRoyal.jpg"

const Trending = () => {
  return (
    <div className="trending-page">
      <h1>Trending</h1>
      <br/>
      <h2>Shoe of the Day!</h2>
      <div>
        <ShoeCard userName="victor.mendizabal" image={airJordan1MidHyperRoyal}/>
      </div>

      <h3>What's Hot Right Now</h3>
      <div className="shoe-carosel">
        
        <ShoeSquare userName="hugo2211" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Mark" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="HarrysKicks" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="BlockBetty" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="KingDonut" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Victor.Mendizabal" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />

      </div>

      <h3>New Releases</h3>
      <div className="shoe-carosel">
        
      <ShoeSquare userName="hugo2211" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Mark" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="HarrysKicks" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="BlockBetty" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="KingDonut" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Victor.Mendizabal" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />

      </div>

      <h3>Old School</h3>
      <div className="shoe-carosel">
        
      <ShoeSquare userName="hugo2211" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Mark" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="HarrysKicks" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="BlockBetty" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="KingDonut" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Victor.Mendizabal" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />

      </div>

      <h3>Classics</h3>

      <div className="shoe-carosel">
        
      <ShoeSquare userName="hugo2211" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Mark" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="HarrysKicks" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="BlockBetty" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="KingDonut" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />
        <ShoeSquare userName="Victor.Mendizabal" image={airJordan1MidHyperRoyal} product="Jordan 1 Mid Hyper Royal" price="$132" />
        <ShoeSquare userName="anaBananaSplit" image={nikeDunkHighSpSyracuse} product="Nike Dunk /high Syracuse" price="$98" />

      </div>
    </div>
  );
};

export default Trending;
