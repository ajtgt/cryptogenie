import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";
import predReducer from "../features/user/predSlice";
import thresholdReducer from "../features/user/thresholdSlice";

// import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pred: predReducer,
    threshold: thresholdReducer,
  },
  // other options e.g middleware, go here
});
