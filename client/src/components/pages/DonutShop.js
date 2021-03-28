import styled from "@emotion/styled";
import axios from "axios";
import {useState} from "react";
import Donut from "../../images/donut.png"

import Image from "./Image";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DonutShop = ({}) => {

  const [feedData, setFeedData] = useState([]);

  // useEffect(() => {
  //   getFeedData();
  // }, []);

  return (  
    <Shop>
      <ShopName>Sneakerheads</ShopName>
      <Image src={Donut} width="100px"></Image>
      <Controls>
        
      </Controls>
    </Shop>
  );
};

export default DonutShop;
