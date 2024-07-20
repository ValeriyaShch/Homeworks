import { all, call } from 'redux-saga/effects'
import {swapiWatcher} from "./watchers/swapiWatcher.js";
import {todoWatcher} from "./watchers/todoWatcher.js";
export function* rootSaga() {
  yield all([
    call(swapiWatcher),
    call(todoWatcher),
  ])
}
