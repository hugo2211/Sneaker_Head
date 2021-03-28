import { useState } from "react";
import {useHistory } from "react-router-dom";

import Layout from "./Layout";
import Row from "./Row";
import DonutShop from "./DonutShop";
import CheckoutForm from "./CheckoutForm";
import getDonutPrice from "../../utils/get-donut-price";

const MainPage = props => {  const [numDonuts, setNumDonuts] = useState(1);

  const history =useHistory();

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));


  return (
    <Layout title="Donut Shop">
      <Row>
        <DonutShop
          onAddDonut={addDonut}
          onRemoveDonut={remDonut}
          numDonuts={numDonuts}
        />
      </Row>
      <CheckoutForm
        price={getDonutPrice(numDonuts)}
        onSuccessfulCheckout={() => history.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;
