import { createSlice } from "@reduxjs/toolkit";
import { Test2InitialState as initialState } from "../../state";

const test2Slice = createSlice({
  name: "test2",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default test2Slice.reducer;
export const {} = test2Slice.actions;
