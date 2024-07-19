import {createAction} from "@reduxjs/toolkit";

export const todoActions = Object.freeze({
    addTodo: createAction('ADD_TODO'),
    removeTodo: createAction('REMOVE_TODO'),
    editTodo: createAction('EDIT_TODO'),
    updateTodo: createAction('UPDATE_TODO'),
    clearTodos: createAction('CLEAR_TODOS'),
})
