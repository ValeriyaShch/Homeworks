import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
}

export default createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        setItems: (state, action) => {
            state.items = action.payload
        },
        resetAll: (state) => {
            state.items = []
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },



    }
})