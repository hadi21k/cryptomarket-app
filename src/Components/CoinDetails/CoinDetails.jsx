import { useParams } from "react-router-dom";
import { useGetDetailedCoinQuery } from "../../features/cryptoApi";
import Loading from "../Loading";

const CoinDetails = () => {
  const { coinId } = useParams();
  const { data: coinDetails, isLoading } = useGetDetailedCoinQuery(coinId);
  const coin = coinDetails?.data?.coin;
  console.log(coinDetails);
  return (
    <div className="min-h-[calc(100vh-70px)] ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-8 py-3 md:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img src={coin.iconUrl} alt={coin.symbol} className="w-8 h-8" />
              <span className="text-3xl font-semibold text-white">
                {coin.name}
              </span>
              <span className="small_box">{coin.symbol}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="small_box">Rank #{coin.rank}</span>
              <span className="small_box">{coin.type}</span>
            </div>
            <div className="grid max-w-xs grid-cols-3 gap-4">
              <a
                href={coin.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 small_box"
              >
                URL
              </a>
              {coin.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 small_box"
                >
                  {social.type}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-sm font-medium text-gray-500">
                {coin.name} price {coin.symbol}
              </h1>
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold text-white">
                  {coin.price >= 1
                    ? Math.floor(coin.price).toLocaleString()
                    : Math.floor(coin.price * 100000) / 100000}
                </h1>
                <h1>
                  {coin.change > 0 ? (
                    <span className="bg-[#2dc653] px-2 py-1 text-white font-semibold rounded ">
                      {coin.change}%
                    </span>
                  ) : (
                    <span className="px-2 py-1 font-semibold text-white bg-red-500 rounded">
                      {coin.change}
                    </span>
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
