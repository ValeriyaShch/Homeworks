import {put, select, delay} from 'redux-saga/effects';
import todoSlice from "../../slice/todoSlice.js";
import selectors from "../../selectors.js";


function* editTodoWorker(action) {
    const {payload} = action;
    const items = yield select(selectors.items);

    yield put(todoSlice.actions.setLoading(true))

    yield delay(1000)
    const newArray = items.map(item => {
        if (item.id === payload) {
            return {...item, isEditing: !item.isEditing}
        } else {
            return item;
        }
    });
    yield put(todoSlice.actions.setItems(newArray))

    yield put(todoSlice.actions.setLoading(false))
}

export {
    editTodoWorker,
}