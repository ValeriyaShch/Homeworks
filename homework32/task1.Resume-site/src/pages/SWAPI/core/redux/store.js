import { configureStore } from "@reduxjs/toolkit";
import swapiSlice from "./slice.js";
import {sagaMiddleware} from "./middlewares.js";
import {rootSaga} from "../saga/rootSaga.js";


export const store = configureStore({
  reducer: {
    swapi: swapiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
