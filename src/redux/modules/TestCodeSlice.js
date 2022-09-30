import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  testCode: [
    {
      id: 0,
      exampleCode:
        "   *직접 쳐보면 뭐가 다른지 알 수 있어요!!*\n --------------------------------------------\n\n<div>\n <h1>\n  h1태그가 뭘까요? \n </h1>\n <h2>\n  1에서 2로 줄어들었네요..?\n </h2>\n <h3>\n 줄었다....? 힌트에요!\n </h3>\n</div>",
    },
    {
      id: 1,
      exampleCode:
        '   *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n --------------------------------------------\n\n\n<div \n  style="width:200px; \n  height:200px; \n  border:1px solid red; \n  background-color:black;">\n\n 이건 inline style이라는 거에요!\n 궁금하다면 직접 공부해볼까요? \n\n</div>',
    },
  ],
  frontCode: [
    {
      id: 2,
      exampleCode:
        "   *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n --------------------------------------------\n\n\n\n Java Script 문제1",
    },
    {
      id: 3,
      exampleCode:
        "   *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n --------------------------------------------\n\n\n\n Java Script 문제2",
    },
  ],
  backCode: [
    {
      id: 4,
      exampleCode:
        '   *직접 쳐보면 뭐가 다른지 알 수 있어요!!\n --------------------------------------------\n\n\n\n int money = 2000;\n\n if (money>=3000) {\n      System.out.println("택시 탑승 가능");\n} else{\n     System.out.println("걸어가라");\n}',
    },
    {
      id: 5,
      exampleCode:
        '   *()안에 숫자값은 20이하로 적용시켜주세요!\n --------------------------------------------\n\n\n\n int treeHit = 0;\n while (treeHit <10) {\n     treeHit++;\n     System.out.println("나무를 "+ treeHit + "번 찍었습니다.");\n     if (treeHit == 10) {\n         System.out.println("나무 넘어갑니다.");\n  }\n }',
    },
  ],
  result:[]
};

// export const __getLectureList = createAsyncThunk(
//   "GET_LECTURE_LIST",
//   async (payload, thunkAPI) => {
//     const { data } = await instance.get(`api/lecture`);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );

export const __sendPracCode1 = createAsyncThunk(
  "QUIZRESULT",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { data } = await api.post(`/api/firstCode`,payload);
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __sendPracCode2 = createAsyncThunk(
  "QUIZRESULT",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { data } = await api.post(`/api/secondCode`,payload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const TestCodeSlice = createSlice({
  name: "testCode",
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(state);
      // state.testCode = state.testCode.concat(action.payload);
    },
  },
  extraReducers: {
    [__sendPracCode1.fulfilled]: (state, action) => {
      state.result = action.payload;
      console.log(state.result);
    },
  },
});
export const { getTestCodeList, addComment } = TestCodeSlice.actions;
export default TestCodeSlice.reducer;
