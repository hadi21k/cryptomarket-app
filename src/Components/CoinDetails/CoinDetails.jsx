import { useParams } from "react-router-dom";
import { useGetDetailedCoinQuery } from "../../features/cryptoApi";
import Loading from "../Loading";
import CoinGraph from "./CoinGraph";
import CoinStats from "./CoinStats";
import GeneralInfo from "./GeneralInfo";

const CoinDetails = () => {
  const { coinId } = useParams();
  const { data: coinDetails, isLoading } = useGetDetailedCoinQuery(coinId);
  return (
    <div className="min-h-[calc(100vh-70px)] ">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CoinStats coinDetails={coinDetails} />
          <GeneralInfo coinDetails={coinDetails} />
          <CoinGraph coinId={coinId} coinDetails={coinDetails} />
        </>
      )}
    </div>
  );
};

export default CoinDetails;
