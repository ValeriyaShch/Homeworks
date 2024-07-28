import {put, call, delay} from 'redux-saga/effects';
import hotels from "../../slice.js";
import api from "../../../../config/api.js";
import {push} from "redux-first-history";
import {route} from "../../../../config/route.jsx";
import statusCodes from "../../../../../helpers/constants.js";

export function* callGetHotelsWorker(action) {
  const {payload} = action;
  try {
    yield put(hotels.actions.setLoading(true));
    const {data, status} = yield call(api.getHotels, payload);

    if (status === statusCodes.OK) {
      yield delay(1000);
      yield put(hotels.actions.setItems(data));
      yield put(push(route.hotels.path))
    }

    yield put(hotels.actions.setLoading(false));
  } catch (error) {
    console.error(error)
  }
}
