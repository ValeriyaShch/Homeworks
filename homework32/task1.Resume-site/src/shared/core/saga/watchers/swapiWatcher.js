import { takeEvery } from 'redux-saga/effects';
import {swapiAsyncActins} from "../asyncActions.js";
import {callGetSwapiDataWorker} from "../workers/swapiWorkers.js";
export function* swapiWatcher() {
  yield takeEvery(swapiAsyncActins.getSwapiDataAsync.type, callGetSwapiDataWorker)
}
