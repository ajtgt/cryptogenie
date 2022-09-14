import { createSlice } from "@reduxjs/toolkit";

export const thresholdSlice = createSlice({
  name: "threshold",
  initialState: {
    threshold: false,
  },
  reducers: {
    thbreshold: (state, action) => {
      state.threshold = action.payload;
    },
  },
});

export const { threshold } = thresholdSlice.actions;

export default thresholdSlice.reducer;
