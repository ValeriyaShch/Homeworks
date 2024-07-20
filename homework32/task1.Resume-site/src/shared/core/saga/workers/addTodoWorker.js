import {put, delay} from 'redux-saga/effects';
import todoSlice from "../../redux/Slices/todoSlice.js";

function* addTodoDataWorker(action) {
    const {payload} = action;

    yield put(todoSlice.actions.setLoading(true))

    yield delay(1000)
    yield put(todoSlice.actions.addItem(payload))

    yield put(todoSlice.actions.setLoading(false))
}


export {
    addTodoDataWorker,
}
