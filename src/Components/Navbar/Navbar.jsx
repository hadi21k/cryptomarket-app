import React from "react";
import { GiAtom } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white bg-[#0a0a0a] h-[70px] ">
      <div className="container flex items-center justify-between h-full mx-auto">
        <Link to="/">
          <div className="title flex items-center space-x-1">
            <GiAtom className="w-8 h-8 transform rotate-[45deg] " />
            <h1 className="font-bold text-xl">Cryptoverse</h1>
          </div>
        </Link>
        <ul className="lg:flex hidden flex-1 justify-center items-center space-x-8">
          <Link to="/">
            <li className="flex items-center space-x-1">
              <AiFillHome className="w-4 h-4" />
              <h1 className="font-semibold">Home</h1>
            </li>
          </Link>
          <Link to="coins">
            <li className="flex items-center space-x-1">
              <FaCoins className="w-4 h-4" />
              <h1 className="font-semibold">Cryptocurrencies</h1>
            </li>
          </Link>
          <Link to="exchanges">
            <li className="flex items-center space-x-1">
              <RiExchangeLine className="w-4 h-4" />
              <h1 className="font-semibold">Exchanges</h1>
            </li>
          </Link>
          <Link to="news">
            <li className="flex items-center space-x-1">
              <BsNewspaper className="w-4 h-4" />
              <h1 className="font-semibold">News</h1>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
