import React, { useState } from "react";
import millify from "millify";
import Description from "./Description";

const GeneralInfo = ({ coinDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const coin = coinDetails?.data?.coin;
  return (
    <>
      {isOpen && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x-[1px] md:text-center w-full text-white md:divide-y-0 divide-y-[1px] divide-x-[#646B80]">
            <div className="py-6">
              <h6 className="text-[#646B80] font-semibold">MarketCap:</h6>
              <span>{millify(coin.marketCap)}</span>
            </div>
            <div className="py-6">
              <h6 className="text-[#646B80] font-semibold">Volume24h:</h6>
              <span> {millify(coin["24hVolume"])}</span>
            </div>
            <div className="py-6">
              <h6 className="text-[#646B80] font-semibold">AllTimeHigh:</h6>
              {millify(coin.allTimeHigh.price)}
            </div>
            <div className="py-6">
              <h6 className="text-[#646B80] font-semibold">
                CirculatingSupply:
              </h6>
              {millify(coin.supply.circulating)}
            </div>
          </div>
          <Description coinDetails={coinDetails} />
        </>
      )}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#646B80] mt-3 cursor-pointer text-center p-1 text-white font-semibold rounded "
      >
        {isOpen ? "Less Stats" : "More Stats"}
      </div>
    </>
  );
};

export default GeneralInfo;
