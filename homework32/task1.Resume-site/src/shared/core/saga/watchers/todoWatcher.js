import {takeEvery} from 'redux-saga/effects';
import {addTodoDataWorker} from "../workers/addTodoWorker.js";
import {todoActions} from "../actionTypes.js";
import {removeTodoWorker} from "../workers/removeTodoWorker.js";
import {editTodoWorker} from "../workers/editTodoWorker.js";
import {updateTodoWorker} from "../workers/updateTodoWorker.js";
import {clearTodosWorker} from "../workers/clearTodosWorker.js";

export function* todoWatcher() {
    yield takeEvery(todoActions.addTodo.type, addTodoDataWorker)
    yield takeEvery(todoActions.removeTodo.type, removeTodoWorker)
    yield takeEvery(todoActions.editTodo.type, editTodoWorker)
    yield takeEvery(todoActions.updateTodo.type, updateTodoWorker)
    yield takeEvery(todoActions.clearTodos.type, clearTodosWorker)
}
