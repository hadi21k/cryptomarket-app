import React, { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { useGetCoinsQuery } from "../../features/cryptoApi";
import { BiCheck } from "react-icons/bi";
import { CgArrowsScrollV } from "react-icons/cg";

const CoinsSelections = ({ selectedCoin, setSelectedCoin }) => {
  const { data: coins } = useGetCoinsQuery(100);
  return (
    <>
      <Listbox value={selectedCoin} onChange={setSelectedCoin}>
        <Listbox.Button className="text-black bg-[#ffce45] font-semibold w-1/2 flex items-center justify-between px-2 py-1 rounded outline-none">
          <span>{selectedCoin}</span>
          <CgArrowsScrollV className="w-5 h-5" />
        </Listbox.Button>
        <Listbox.Options className="overflow-y-auto w-1/2 h-[120px] mt-2 outline-none">
          {coins?.data.coins.map((coin, index) => (
            <Listbox.Option key={index} value={coin.name}>
              {({ active, selected }) => (
                <div
                  className={`${
                    active ? "bg-[#ffce45]" : "text-white"
                  } px-1 py-2 rounded`}
                >
                  {selected ? (
                    <div className="flex items-center space-x-1 font-semibold">
                      <BiCheck className="w-4 h-4" />
                      <span>{coin.name}</span>
                    </div>
                  ) : (
                    <span>{coin.name}</span>
                  )}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
};

export default CoinsSelections;
