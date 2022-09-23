import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    testCode: [
      {
        id: 0,
        exampleCode: '   *직접 쳐보면 뭐가 다른지 알 수 있어요!!*\n\n<div>\n <h1>\n  h1태그가 뭘까요? \n </h1>\n <h2>\n  1에서 2로 줄어들었네요..?\n </h2>\n <h3>\n 줄었다....? 힌트에요!\n </h3>\n</div>',
        answerCode: "코드를 입력해볼까요?",
      },
    {
      id: 1,
      exampleCode: '   *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n\n<div>\n <ol>\n  <li>ol태그는 정렬된 목록을 번호로 나타내줍니다!\n  </li>\n  <li>li 태그는 목록의 항목을 나타냅니다! </li>\n  <li>신기하지 않나요?</li> \n </ol> \n</div>',
      answerCode: "코드를 입력해볼까요?",
    },
    {
      id: 2,
      exampleCode: '   *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n\n<div \n  style="width:200px; \n  height:200px; \n  border:1px solid red; \n  background-color:black;">\n 이건 inline style이라는 거에요!\n 궁금하다면 직접 공부해볼까요? \n</div>',
      answerCode: "코드를 입력해볼까요?",
    }
  ],
};

// export const __getLectureList = createAsyncThunk(
//   "GET_LECTURE_LIST",
//   async (payload, thunkAPI) => {
//     const { data } = await instance.get(`api/lecture`);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );

export const TestCodeSlice = createSlice({
  name: "testCode",
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(state);
      // state.testCode = state.testCode.concat(action.payload);
    },
  },
  extraReducers: {},
});
export const {getTestCodeList,addComment} = TestCodeSlice.actions;
export default TestCodeSlice.reducer;
