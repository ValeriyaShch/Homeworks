import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import swapiSlice from "../redux/slice.js";
function* callGetSwapiDataWorker(action) {
  const { payload } = action;
  console.log('GET DATA', action);
  yield put(swapiSlice.actions.setLoader(true))
  const url = `https://swapi.dev/api/${payload}`;
  const res = yield call(axios.get, url);
  if (res.status === 200) {
          yield put(swapiSlice.actions.setData(res.data))
          yield put(swapiSlice.actions.setAction(payload))
  }
  yield put(swapiSlice.actions.setLoader(false))
}

export {
  callGetSwapiDataWorker,
}
