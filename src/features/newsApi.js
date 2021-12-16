import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "963115ef3emshe42bf9f35a5d203p10e8f0jsn667fe96bd8ca",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: headers });

export const cryptoNewsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = cryptoNewsApi;
