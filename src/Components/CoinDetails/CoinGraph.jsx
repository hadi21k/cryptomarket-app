import { useState } from "react";
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
import { Line } from "react-chartjs-2";
import { useGetCryptoHistoryQuery } from "../../features/cryptoApi";
import Loading from "../Loading";
import { Tab } from "@headlessui/react";

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
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
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
