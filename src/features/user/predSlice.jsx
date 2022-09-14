import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: "",
// };

export const predSlice = createSlice({
  name: "pred",
  initialState: {
    pred: "",
  },
  reducers: {
    pred: (state, action) => {
      // console.log(action.payload);
      // login: state => {
      // state.token = action.payload.__raw;
      state.pred = action.payload;
      // console.log("Hii Payload", state.token);
    },
  },
});

export const { pred } = predSlice.actions;
// export const selectUser = state.user.token;

// export const selectUser = () => state.user.token;
export default predSlice.reducer;
