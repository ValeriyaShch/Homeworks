import {all, call} from 'redux-saga/effects'
import {destinationWatcher} from "../core/destination/saga/watchers.js";
import {hotelsWatcher} from "../core/hotels/saga/watchers.js";

export function* rootSaga() {
  yield all ([
    call(destinationWatcher),
    call(hotelsWatcher)
  ])
}

