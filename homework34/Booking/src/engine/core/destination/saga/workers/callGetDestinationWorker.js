import {put, call, delay} from 'redux-saga/effects';
import destination from "../../slice.js";
import api from "../../../../config/api.js";
import statusCodes from "../../../../../helpers/constants.js";

export function* callGetDestinationWorker() {
  try {
    yield put(destination.actions.setLoading(true));
    const {data, status} = yield call(api.getDestination);

    if (status === statusCodes.OK) {
      yield delay(1000);
      yield put(destination.actions.setItems(data));
    }

    yield put(destination.actions.setLoading(false));
  } catch (error) {
    console.error(error)
  }
}
