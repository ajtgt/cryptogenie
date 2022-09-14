import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   token: "",
// };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    login: (state, action) => {
      // console.log(action.payload);
      // login: state => {
      // state.token = action.payload.__raw;
      // console.log("Token in userSlice", action.payload?.__raw);
      state.token = action.payload?.__raw;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
// export const selectUser = state.user.token;

// export const selectUser = () => state.user.token;
export default userSlice.reducer;
