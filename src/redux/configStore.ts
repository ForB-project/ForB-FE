import { configureStore } from "@reduxjs/toolkit";
import quiz from "./modules/QuizSlice";
import testCode from "./modules/TestCodeSlice";
import chat from "./modules/ChatSlice";

const store = configureStore({
  reducer: { quiz, testCode, chat },
});

export default store;
