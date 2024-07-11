import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    parameters: [],
    info: `Info will appear here...`
}
export default createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        resetAll: (state) => {
            state.parameters = []
            state.info = ''
        },
        requestedInfo: (state) => {
            state.isLoading = true
        },
        respondedInfo: (state) => {
            state.isLoading = false
        },
        setParams: (state, value) => {
            state.parameters = value.payload ?? []
        },
        setInfo: (state, value) => {
            state.info = JSON.stringify(value.payload, null, 3) ?? ""
        }
    }
})