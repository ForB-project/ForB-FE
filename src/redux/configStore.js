import { configureStore } from "@reduxjs/toolkit";
import quiz from "./modules/QuizSlice"
import testCode from "./modules/TestCodeSlice"

const store = configureStore({
  reducer: {quiz,testCode,
    devTools: process.env.NODE_ENV !== "production"
  },
});

export default store;
