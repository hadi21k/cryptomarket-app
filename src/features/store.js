import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./cryptoApi";
import { cryptoNewsApi } from "./newsApi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware),
});
