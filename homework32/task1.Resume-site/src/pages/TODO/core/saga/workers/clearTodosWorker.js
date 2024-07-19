import {put, delay} from 'redux-saga/effects';
import todoSlice from "../../slice/todoSlice.js";

function* clearTodosWorker(action) {
    yield put(todoSlice.actions.setLoading(false))

    yield delay(500)
    yield put(todoSlice.actions.resetAll())

    yield put(todoSlice.actions.setLoading(false))
}

export {
    clearTodosWorker,
}