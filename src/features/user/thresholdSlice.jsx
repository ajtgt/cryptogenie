import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  threshold: false,
};
export const thresholdSlice = createSlice({
  name: "threshold",
  initialState,
  reducers: {
    setThreshold: (state, action) => {
      state.threshold = action.payload;
      // state.threshold = !state.threshold;
      
    },
  },
});

export const { setThreshold } = thresholdSlice.actions;

export default thresholdSlice.reducer;
