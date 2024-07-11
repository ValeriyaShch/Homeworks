import {configureStore} from "@reduxjs/toolkit";
import swapiSlice from "./slice/swapiSlice.js";

export const store = configureStore({
    reducer: {
        swapi: swapiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
})
