import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../../features/newsApi.js";
import { useGetCoinsQuery } from "../../features/cryptoApi";
import CoinsSelections from "./CoinsSelections.jsx";
import Loading from "../Loading.jsx";
const altImage =
  "https://media.istockphoto.com/photos/bitcoin-ethereum-and-litecoin-picture-id904658652?k=20&m=904658652&s=612x612&w=0&h=3yH0xYO0ckgIZ6aFdGCJ9Ow98teVQletv9BqwpxLNwc=";

const News = ({ simplified }) => {
  const { data: coins } = useGetCoinsQuery(100);
  const [selectedCoin, setSelectedCoin] = useState("Cryptocurrencies");
  const count = simplified ? 6 : 12;
  const { data: news, isLoading } = useGetNewsQuery({
    selectedCoin,
    count: count,
  });
  return (
    <>
      {location.pathname !== "/" && (
        <div className="my-4">
          <div className="selection">
            <CoinsSelections
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
            />
          </div>
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-between mb-4 text-white">
            <h1 className="hidden text-xl font-bold sm:block">
              {selectedCoin} News
            </h1>
            {location.pathname !== "/news" && (
              <Link to="/news">
                <h1 className="text-[#ffce45] text-sm font-bold">Show more</h1>
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {news?.value.map(
              ({ description, image, name, url, datePublished }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-1 space-y-2 transition-all duration-500 rounded-lg shadow md:justify-between hover:shadow-md"
                >
                  <div className="flex flex-col space-y-2">
                    <img
                      src={altImage}
                      alt="news photo"
                      className="aspect-[4/3] rounded-lg"
                    />
                    <div>
                      <h3 className="text-white">{name}</h3>
                    </div>
                    <div className="mt-4 text-xs text-white ">
                      {description.length > 100
                        ? `${description.substring(0, 100)}...`
                        : description}
                    </div>
                  </div>
                  <div className="text-xs text-[#ffce45] font-semibold">
                    {moment(datePublished).startOf("ss").fromNow()}
                  </div>
                </a>
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default News;
