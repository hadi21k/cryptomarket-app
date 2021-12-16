import moment from "moment";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetNewsQuery } from "../../features/newsApi.js";

const News = ({ simplified }) => {
  const altImage =
    "https://media.istockphoto.com/photos/bitcoin-ethereum-and-litecoin-picture-id904658652?k=20&m=904658652&s=612x612&w=0&h=3yH0xYO0ckgIZ6aFdGCJ9Ow98teVQletv9BqwpxLNwc=";

  const location = useLocation();
  const count = simplified ? 6 : 12;
  const { data } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: count,
  });
  return (
    <>
      <div className="flex items-center justify-between mb-4 text-white">
        <h1 className="font-bold text-xl">Cryptocurrencies News</h1>
        {location.pathname !== "/news" && (
          <Link to="/news">
            <h1 className="text-[#ffce45] text-sm font-bold">Show more</h1>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.value.map(
          ({ description, image, name, url, datePublished }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow transition-all p-1 duration-500 rounded-lg flex flex-col md:justify-between space-y-2 hover:shadow-md"
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
                <div className="text-white text-xs mt-4 ">
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
  );
};

export default News;
