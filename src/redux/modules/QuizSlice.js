import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  quiz: [
    {
      id: 1,
      quizTitle:
        "조립용품을 구매하고 배달이 왔을때 당신이 취하는 첫번째 행동은 무엇인가.",
      answerFront: "자신의 감에 의지해서 조립해나가면서 즐거워한다",
      answerBack: "사용설명서를 주의 깊게 보고 조립한다",
      forbCount: 0
    },
    {
      id: 2,
      quizTitle: "생일선물로 받고 싶은 것은(동일한 가격일 경우)?",
      answerFront: " 분위기있는 고급 와인",
      answerBack: " 실용적인 스마트 워치",
      forbCount: 0
    },
    {
      id: 3,
      quizTitle: "여행가서 길을 잃은 당신은?",
      answerFront: "여유롭게 걸으며 경치를 즐긴다",
      answerBack: "네이버지도를 켜서 목적지로 향한다",
      forbCount: 0
    },
  ],
};

// export const __getLectureList = createAsyncThunk(
//   "GET_LECTURE_LIST",
//   async (payload, thunkAPI) => {
//     const { data } = await instance.get(`api/lecture`);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );

export const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
  },
  extraReducers: {},
});
export const {getQuizList} = QuizSlice.actions;
export default QuizSlice.reducer;
