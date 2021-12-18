import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetCoinsQuery } from "../../features/cryptoApi";
import { useInput } from "../../Hooks/useInput";

const simplifyNumber = (number) => {
  return Math.floor(number * 10000) / 100;
};

const Coins = ({ simplified }) => {
  const [searchTerm, searchTermAttribute] = useInput("");
  const location = useLocation();
  const count = simplified ? 10 : 100;
  const { data, isLoading } = useGetCoinsQuery(count);
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
            {...searchTermAttribute}
            className="outline-none py-2 px-3 rounded-lg mt-3 w-1/2 mx-auto bg-[#E63946] text-white placeholder-white"
            placeholder="Search for a coin"
          />
        )}
      </div>
      {location.pathname === "/" && (
        <div className="flex items-center justify-between mb-4 text-white">
          <h1 className="font-bold text-xl sm:block hidden">
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
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col space-y-4">
          <div className="px-3 rounded grid grid-cols-3 sm:grid-cols-4 text-center lg:grid-cols-6 text-white gap-8 text-xs font-bold">
            <div className="flex items-center space-x-2 justify-center">
              <span>#</span>
              <span>Name</span>
            </div>
            <div>Price</div>
            <div>24%</div>
            <div className="sm:block hidden">MarketCap</div>
            <div className="hidden lg:block">Volume24h</div>
            <div className="hidden lg:block">CirculatingSupply</div>
          </div>
          {coins?.map((coin) => (
            <div
              key={coin.id}
              className="shadow-md p-3 grid text-center grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 hover:shadow-lg gap-8 font-semibold"
            >
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
              <div className="text-white text-sm">
                {simplifyNumber(coin.price)}
              </div>
              <div>
                {coin.change > 0 ? (
                  <span className="text-[#2dc653] text-xs">{coin.change}</span>
                ) : (
                  <span className="text-red-500 text-xs">{coin.change}</span>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Coins;
