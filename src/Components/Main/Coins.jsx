import millify from "millify";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetCoinsQuery } from "../../features/cryptoApi";

const simplifyNumber = (number) => {
  return Math.floor(number * 100).toLocaleString();
};

const Coins = ({ simplified }) => {
  const location = useLocation();
  const count = simplified ? 10 : 50;
  const { data } = useGetCoinsQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);
  console.log(coins);
  useEffect(() => {
    const filteredCoins = data?.data.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCoins(filteredCoins);
  }, [searchTerm, data]);
  return (
    <div className="flex flex-col space-y-8 mb-8">
      <div className="mx-auto w-full flex items-center justify-center">
        {location.pathname !== "/" && (
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none py-2 px-3 rounded-lg mt-3 w-1/2 mx-auto bg-[#E63946] text-white placeholder-white"
            placeholder="Search for a coin"
          />
        )}
      </div>
      {location.pathname === "/" && (
        <div className="flex items-center justify-between mb-4 text-white">
          <h1 className="font-bold text-xl">Cryptocurrencies</h1>
          {location.pathname !== "/news" && (
            <Link to="/coins">
              <h1 className="text-[#ffce45] text-sm font-bold">Show more</h1>
            </Link>
          )}
        </div>
      )}
      <div className="flex flex-col space-y-4">
        <div className="px-3 rounded grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 text-white gap-8 text-xs font-bold">
          <div className="flex items-center space-x-2">
            <span>#</span>
            <span>Name</span>
          </div>
          <div>Price</div>
          <div>24%</div>
          <div>MarketCap</div>
          <div className="hidden lg:block">Volume24h</div>
          <div className="hidden lg:block">CirculatingSupply</div>
        </div>
        {coins?.map((coin) => (
          <div
            key={coin.id}
            className="shadow-md p-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 hover:shadow-lg gap-8 font-semibold"
          >
            <h3 className="font-semibold text-white">
              <div className="flex items-center space-x-2">
                <div>{coin.rank}</div>
                <div>
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    className="w-6 h-6 max-w-full"
                  />
                </div>
                <span>{coin.name}</span>
              </div>
            </h3>
            <div className="text-white text-sm">{simplifyNumber(coin.price)}</div>
            <div>
              {coin.change > 0 ? (
                <span className="text-[#2dc653] text-xs">{coin.change}</span>
              ) : (
                <span className="text-red-500 text-xs">{coin.change}</span>
              )}
            </div>
            <div className="text-red-500 text-xs ">
              {simplifyNumber(coin.marketCap)}
            </div>
            <div className="text-white text-xs hidden lg:block">
              {simplifyNumber(coin.volume)}
            </div>
            <div className="text-white text-xs lg:block hidden">
              {simplifyNumber(coin.circulatingSupply)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coins;
