import {put, delay, select} from 'redux-saga/effects';
import todoSlice from "../../slice/todoSlice.js";
import selectors from "../../selectors.js";


function* updateTodoWorker(action) {
    const {payload} = action;
    const items = yield select(selectors.items);

    yield put(todoSlice.actions.setLoading(true))
    yield delay(1000)

    const newArray = items.map(item => {
        if (item.id === payload.id) {
            return {...item, isEditing: false, text: payload.text, isDone: payload.isDone}
        } else {
            return item;
        }
    });

    yield put(todoSlice.actions.setItems(newArray))
    yield put(todoSlice.actions.setLoading(false))
}

export {
    updateTodoWorker,
}