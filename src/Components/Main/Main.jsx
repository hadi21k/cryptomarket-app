import React from "react";
import { Routes, Route } from "react-router-dom";
import CoinDetails from "../CoinDetails/CoinDetails";
import Coins from "./Coins";
import News from "./News";
import Stats from "./Stats";

const Main = () => {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-[#141414] overflow-x-hidden">
      <div className="container px-2 mx-auto sm:px-0">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Stats />
                <Coins simplified />
                <News simplified />
              </>
            }
          />
          <Route path="/coins" element={<Coins simplified={false} />} />
          <Route path="/coins/:coinId" element={<CoinDetails />} />
          <Route path="/news" element={<News simplified={false} />} />
          <Route path="*" element={"Page Not Found"} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
