import {useDispatch, useSelector} from "react-redux";

import selectors from "../../../../shared/core/redux/Selectors/todoSelectors.js";

import {useState} from "react";
import {todoActions} from "../../../../shared/core/saga/actionTypes.js";

export function useItem(id, defaultValue, isDone) {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(defaultValue);
    const isLoading = useSelector(selectors.isLoading);

    const onDeleteTask = () => {
        dispatch(todoActions.removeTodo(id))
    }
    const onToggleTask = () => {
        dispatch(todoActions.updateTodo({id: id, text: inputValue, isDone: !isDone}))
    }

    const onEditTask = (id) => {
        dispatch(todoActions.editTodo(id))
    }

    const onUpdateTask = () => {
        dispatch(todoActions.updateTodo({id: id, text: inputValue, isDone}))
    }

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    return {
        onDeleteTask,
        onToggleTask,
        onEditTask,
        onUpdateTask,
        isLoading,
        inputValue,
        onChangeInput
    }
}
