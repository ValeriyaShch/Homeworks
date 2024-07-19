import { all, call } from 'redux-saga/effects'
import {swapiWatcher} from "./swapiWatcher.js";
export function* rootSaga() {
  yield all([
    call(swapiWatcher),
  ])
}
