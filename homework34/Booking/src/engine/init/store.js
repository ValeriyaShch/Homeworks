import {configureStore} from "@reduxjs/toolkit";
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from "history";
import createSagaMiddleware from 'redux-saga';
import destination from "../core/destination/slice.js";
import {rootSaga} from "./rootSaga.js";
import hotels from "../core/hotels/slice.js";

const {routerReducer, routerMiddleware, createReduxHistory} = createReduxHistoryContext({
  history: createBrowserHistory()
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destination: destination.reducer,
    hotels: hotels.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), sagaMiddleware, routerMiddleware]
  }
})

sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store);
