import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useGetCryptoHistoryQuery } from "../../features/cryptoApi";
import Loading from "../Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinGraph = ({ coinId, coinDetails }) => {
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId,
  });
  const [graph, setGraph] = useState([]);
  const coinTimestamp = graph?.map((item) => item.time);
  const coinPrice = graph?.map((item) => item.price);
  useEffect(() => {
    if (coinHistory?.data?.history) {
      const graphData = coinHistory.data.history.map((coin) => {
        return {
          time: new Date(coin.timestamp * 1000)
            .toLocaleTimeString()
            .slice(0, 4),
          price: coin.price,
        };
      });

      setGraph(graphData.slice(0, 30).reverse());
    }
  }, [coinHistory]);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: coinDetails?.data?.coin?.color,
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div>
          <Line data={data} options={options} />
        </div>
      )}
    </>
  );
};

export default CoinGraph;
