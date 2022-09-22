import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    testCode: [
      {
        id: 0,
        answerFront: '    *직접 쳐보면 뭐가 다른지 알 수 있어요!!*\n\n<div>\n <h1>\n  h1태그가 뭘까요? \n </h1>\n <h2>\n  1에서 2로 줄어들었네요..?\n </h2>\n <h3>\n 줄었다는 말에서 힌트를 얻을 수 있어요!\n </h3>\n</div>',
        answerBack: "사용설명서를 주의 깊게 보고 조립한다",
        forbCount: 0
      },
    {
      id: 1,
      answerFront: '    *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n\n<div>\n <ol>\n  <li>ol태그는 정렬된 목록을 번호로 나타내줍니다!\n  </li>\n  <li>li 태그는 목록의 항목을 나타냅니다! </li>\n  <li>신기하지 않나요?</li> \n </ol> \n</div>',
      answerBack: "사용설명서를 주의 깊게 보고 조립한다",
      forbCount: 0
    },
    {
      id: 2,
      answerFront: '    *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n\n<div \n  style="width:200px; \n  height:200px; \n  border:1px solid red; \n  background-color:black;">\n 이건 inline style이라는 거에요!\n 궁금하다면 직접 공부해볼까요? \n</div>',
      answerBack: "사용설명서를 주의 깊게 보고 조립한다",
      forbCount: 0
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
  },
  extraReducers: {},
});
export const {getTestCodeList} = TestCodeSlice.actions;
export default TestCodeSlice.reducer;
