import { configureStore } from "@reduxjs/toolkit";
import quiz from "./modules/QuizSlice"

const store = configureStore({
  reducer: {quiz,
    devTools: process.env.NODE_ENV !== "production"
  },
});

export default store;
