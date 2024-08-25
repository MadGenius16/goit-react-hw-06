import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
reducers:{
  setFilterValue(state, action) {
    state.name = action.payload;
  },
}
})

export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;