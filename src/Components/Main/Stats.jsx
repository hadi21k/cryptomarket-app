import React from "react";
import millify from "millify";
import { useGetCoinsQuery } from "../../features/cryptoApi";
import { motion } from "framer-motion";

const Stats = () => {
  const { data, isLoading } = useGetCoinsQuery(10);
  const globalStats = data?.data?.stats;
  if (isLoading) return "";
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      className="lg:flex py-2 hidden items-center space-x-12"
    >
      <div className="flex items-center space-x-8">
        <div className=" py-2 flex items-center space-x-2 text-xs font-semibold">
          <h1 className="text-[#f1faee]">Total Cryptocurrencies: </h1>
          <span className="text-[#ffce45]">{millify(globalStats?.total)}</span>
        </div>
        <div className="py-2 flex items-center space-x-2 text-xs font-semibold">
          <h1 className="text-[#F1FAEE]">Total Exchanges: </h1>
          <span className="text-[#ffce45] font-bold">
            {millify(globalStats.totalExchanges)}
          </span>
        </div>
        <div className="py-2 flex items-center space-x-2 text-xs font-semibold">
          <h1 className="text-[#F1FAEE]">Total MarketCap: </h1>
          <span className="text-[#ffce45] font-bold">
            {globalStats.totalMarketCap}
          </span>
        </div>
        <div className="py-2 flex items-center space-x-2 text-xs font-semibold">
          <h1 className="text-[#F1FAEE]">Total 24h Volume: </h1>
          <span className="text-[#ffce45] font-bold">
            {millify(globalStats.total24hVolume)}
          </span>
        </div>
        <div className="py-2 flex items-center space-x-2 text-xs font-semibold">
          <h1 className="text-[#F1FAEE]">Total Markets: </h1>
          <span className="text-[#ffce45] font-bold">
            {millify(globalStats.totalMarkets)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
