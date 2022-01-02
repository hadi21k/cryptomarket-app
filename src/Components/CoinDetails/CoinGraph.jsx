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
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const time = ["3h", "24hr", "7d", "30d", "1yr", "3m", "3yr", "5y"];
  const coinPrice = [];
  const timestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
    timestamp.push(
      new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: timestamp,
    datasets: [
      {
        label: "Price in usd",
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
        <div className="max-w-4xl">
          <div className="my-4 flex items-center justify-start">
            <div className="flex items-center flex-wrap p-1 bg-[#646B80] rounded">
              {time.map((timeperiod, index) => (
                <button
                  index={index}
                  className={`px-2 text-white hover:bg-[#141414] transition-all duration-300 rounded`}
                  onClick={() => setTimeperiod(timeperiod)}
                >
                  {timeperiod}
                </button>
              ))}
            </div>
          </div>
          <Line data={data} options={options} />
        </div>
      )}
    </>
  );
};

export default CoinGraph;
