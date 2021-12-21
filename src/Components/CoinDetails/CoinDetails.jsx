import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailedCoinQuery } from "../../features/cryptoApi";

const CoinDetails = () => {
  const { coinId } = useParams();
  const { data: coinDetails, isLoading } = useGetDetailedCoinQuery(coinId);
  console.log(coinDetails);
  return (
    <div>
      <div className="container mx-auto">
        <h1>Coin details for {coinId}</h1>
      </div>
    </div>
  );
};

export default CoinDetails;
