import { GiAtom } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import AuthSection from "../Auth/AuthSection";

const Navbar = () => {
  return (
    <div className="text-white bg-[#0a0a0a] h-[70px]">
      <div className="container flex items-center justify-between h-full px-2 mx-auto sm:px-0">
        <Link to="/">
          <div className="flex items-center space-x-1 title">
            <GiAtom className="w-8 h-8 transform rotate-[45deg] " />
            <h1 className="text-xl font-bold">Cryptoverse</h1>
          </div>
        </Link>
        <ul className="items-center justify-center flex-1 hidden space-x-8 lg:flex">
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
          <Link to="news">
            <li className="flex items-center space-x-1">
              <BsNewspaper className="w-4 h-4" />
              <h1 className="font-semibold">News</h1>
            </li>
          </Link>
        </ul>
        <div className="flex items-center space-x-2">
          <AuthSection />
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
