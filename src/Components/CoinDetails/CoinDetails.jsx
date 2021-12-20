import React from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { coinId } = useParams();
  return (
    <div>
      <div className="container mx-auto">
        <h1>Coin details for {coinId}</h1>
      </div>
    </div>
  );
};

export default CoinDetails;
