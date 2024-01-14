import { createSlice } from "@reduxjs/toolkit";
import { Test1InitialState as initialState } from "../../state";
import { setNameAction } from "./types";

const test1Slice = createSlice({
  name: "test1",
  initialState,
  reducers: {
    setName: (state, action: setNameAction) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default test1Slice.reducer;
export const { setName } = test1Slice.actions;
