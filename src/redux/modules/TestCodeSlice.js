import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    testCode: [
    {
      id: 1,
      answerFront: '<div>\n <ol>\n  <li>ol태그는 정렬된 목록을 번호로 나타내줍니다!\n  </li>\n  <li>li 태그는 목록의 항목을 나타냅니다! </li>\n  <li>신기하지 않나요?</li> \n </ol> \n</div>',
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
