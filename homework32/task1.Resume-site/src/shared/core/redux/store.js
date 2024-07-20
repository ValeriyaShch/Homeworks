import { configureStore } from "@reduxjs/toolkit";
import swapiSlice from "./Slices/swapiSlice.js";
import todoSlice from "./Slices/todoSlice.js";
import {sagaMiddleware} from "./middlewares.js";
import {rootSaga} from "../saga/rootSaga.js";


export const store = configureStore({
  reducer: {
    swapi: swapiSlice.reducer,
    todo: todoSlice.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
