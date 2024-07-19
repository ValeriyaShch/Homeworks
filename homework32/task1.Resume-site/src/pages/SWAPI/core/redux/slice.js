import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  data: undefined,
  action: '/people/1'
}

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setAction: (state, action) => {
      state.action = action.payload;
    }
  }
})

export default swapiSlice;
