import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  path: "/dashboard/seller",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.searchText = action.payload;
    },

    pathChange: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const {searched, pathChange} = filterSlice.actions;
export default filterSlice.reducer;
