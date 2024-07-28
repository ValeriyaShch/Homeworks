import {takeEvery} from 'redux-saga/effects'
import hotelsAsyncAction from "./asyncActions.js";
import {callGetHotelsWorker} from "./workers/index.js";

export function* hotelsWatcher() {
  yield takeEvery(hotelsAsyncAction.getHotelsAsync.type, callGetHotelsWorker)
}
