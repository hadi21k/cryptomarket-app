import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetCoinsQuery } from "../../features/cryptoApi";
import { useInput } from "../../Hooks/useInput";
import Loading from "../Loading";

const Coins = ({ simplified }) => {
  const [searchTerm, searchTermAttribute] = useInput("");
  const location = useLocation();
  const count = simplified ? 10 : 100;
  const { data, isLoading } = useGetCoinsQuery(count);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const filteredCoins = data?.data.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCoins(filteredCoins);
  }, [searchTerm, data]);
  return (
    <div className="flex flex-col mb-8 space-y-8">
      <div className="flex items-center justify-center w-full mx-auto">
        {location.pathname !== "/" && (
          <input
            type="text"
            {...searchTermAttribute}
            className="outline-none py-2 px-3 rounded-lg mt-3 w-1/2 mx-auto font-semibold text-[#141414] bg-[#ffce45] placeholder-[#141414]"
            placeholder="Search for a coin"
          />
        )}
      </div>
      {location.pathname === "/" && (
        <div className="flex items-center justify-between mb-4 text-white">
          <h1 className="hidden text-xl font-bold sm:block">
            Cryptocurrencies
          </h1>
          {location.pathname !== "/news" && (
            <Link to="/coins">
              <h1 className="text-[#ffce45] text-sm font-bold">Show more</h1>
            </Link>
          )}
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-3 gap-8 px-3 text-xs font-bold text-center text-white rounded sm:grid-cols-4 lg:grid-cols-6">
            <div className="flex items-center justify-center space-x-2">
              <span>#</span>
              <span>Name</span>
            </div>
            <div>Price</div>
            <div>24%</div>
            <div className="hidden sm:block">MarketCap</div>
            <div className="hidden lg:block">Volume24h</div>
            <div className="hidden lg:block">CirculatingSupply</div>
          </div>
          {coins?.map((coin) => (
            <Link key={coin.id} to={`/coins/${coin.id}`}>
              <div className="grid grid-cols-3 gap-8 p-3 font-semibold text-center shadow-md sm:grid-cols-4 lg:grid-cols-6 hover:shadow-lg">
                <h3 className="font-semibold text-white">
                  <div className="flex items-center space-x-2">
                    <div>{coin.rank}</div>
                    <div>
                      <img
                        src={coin.iconUrl}
                        alt="coin"
                        className="w-6 h-6 max-w-full"
                      />
                    </div>
                    <span className="text-sm">{coin.name}</span>
                  </div>
                </h3>
                <div className="text-sm text-white">
                  {coin.price >= 1
                    ? Math.floor(coin.price).toLocaleString()
                    : Math.floor(coin.price * 100000) / 100000}
                </div>
                <div>
                  {coin.change > 0 ? (
                    <span className="text-[#2dc653] text-xs">
                      {coin.change}
                    </span>
                  ) : (
                    <span className="text-xs text-red-500">{coin.change}</span>
                  )}
                </div>
                <div className="text-[#ffce45] text-xs sm:block hidden ">
                  {Math.floor(coin.marketCap).toLocaleString()}
                </div>
                <div className="text-[#ffce45] text-xs hidden lg:block">
                  {Math.floor(coin.volume).toLocaleString()}
                </div>
                <div className="text-[#ffce45] text-xs lg:block hidden">
                  {Math.floor(coin.circulatingSupply).toLocaleString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coins;
