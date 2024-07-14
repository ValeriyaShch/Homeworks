import {put, delay, select} from 'redux-saga/effects';
import todoSlice from "../../slice/todoSlice.js";
import selectors from "../../selectors.js";


function* removeTodoWorker(action) {
    const {payload} = action;
    const items = yield select(selectors.items);

    yield put(todoSlice.actions.setLoading(true))

    yield delay(1000)

    const newArray = items.filter(item => item.id !== payload);
    yield put(todoSlice.actions.setItems(newArray))

    yield put(todoSlice.actions.setLoading(false))
}

export {
    removeTodoWorker,
}