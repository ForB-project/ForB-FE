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
      exampleCode: `      *조건을 원하는 대로 입력해보세요!* \n               (JavaScript)\n --------------------------------------------\n\n\n var money = 2000;\n\n if (money>=3000) {\n      console.log("택시를 타고 가라");\n} else{\n     console.log("걸어가라");\n}`,
    },
    {
      id: 3,
      exampleCode: `   *주의*  treeHit 초깃값은 0으로 고정,\n   ()안에 숫자 값은 20이하로 적용시켜주세요!\n   (JavaScript)\n --------------------------------------------\n\n let treeHit = 0;\n while (treeHit <10) {\n     treeHit++;\n     console.log("나무를 "+ treeHit + "번 찍었습니다.");\n     if (treeHit == 10) {\n          console.log("나무 넘어갑니다.");\n  }\n }`,
    },
  ],
  backCode: [
    {
      id: 4,
      exampleCode:
        '      *조건을 원하는 대로 입력해보세요!* \n                   (Java)\n --------------------------------------------\n\n\n\n int money = 2000;\n\n if (money>=3000) {\n      System.out.println("택시를 타고 가라");\n} else{\n     System.out.println("걸어가라");\n}',
    },
    {
      id: 5,
      exampleCode:
        '   *주의*  treeHit 초깃값은 0으로 고정,\n   ()안에 숫자 값은 20이하로 적용시켜주세요!\n   (Java)\n --------------------------------------------\n\n\n int treeHit = 0;\n while (treeHit <10) {\n     treeHit++;\n     System.out.println("나무를 "+ treeHit + "번 찍었습니다.");\n     if (treeHit == 10) {\n         System.out.println("나무 넘어갑니다.");\n  }\n }',
    },
  ],
  result: [
    { id: 0, answer: "코드를 입력해볼까요?", pracCode: "" },
    { id: 1, answer: "코드를 입력해볼까요?", pracCode: "" },
    { id: 2, answer: "코드를 입력해볼까요?", pracCode: "" },
    { id: 3, answer: "코드를 입력해볼까요?", pracCode: "" },
    { id: 4, answer: "코드를 입력해볼까요?", pracCode: "" },
    { id: 5, answer: "코드를 입력해볼까요?", pracCode: "" },
  ],
};

export const __sendPracCode1 = createAsyncThunk(
  "QUIZRESULT1",
  async (payload, thunkAPI) => {
    const { data } = await api.post(`/api/firstCode`, payload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __sendPracCode2 = createAsyncThunk(
  "QUIZRESULT2",
  async (payload, thunkAPI) => {
    const { data } = await api.post(`/api/secondCode`, payload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __sendPracCode3 = createAsyncThunk(
  "QUIZRESULT3",
  async (payload, thunkAPI) => {
    const { data } = await api.post(`/api/secondCode`, payload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const TestCodeSlice = createSlice({
  name: "testCode",
  initialState,
  reducers: {
    addPracCode: (state, action) => {
      state.result = state.result.map(list =>
        list.id === action.payload.id
          ? {
              ...list,
              pracCode: action.payload.codePrac,
              answer: action.payload.codePrac,
            }
          : list
      );
    },
    addFrontPracCode: (state, action) => {
      state.result = state.result.map(list =>
        list.id === action.payload.id
          ? {
              ...list,
              pracCode: action.payload.codePrac,
              answer: action.payload.answer,
            }
          : list
      );
    },
    addBackPracCode: (state, action) => {
      state.result = state.result.map(list =>
        list.id === action.payload.id
          ? { ...list, pracCode: action.payload.codePrac }
          : list
      );
    },
  },
  extraReducers: {
    [__sendPracCode1.fulfilled]: (state, action) => {
      state.result = state.result.map(list =>
        list.id === 4 ? { ...list, answer: action.payload.data } : list
      );
    },
    [__sendPracCode2.fulfilled]: (state, action) => {
      state.result = state.result.map(list =>
        list.id === 5 ? { ...list, answer: action.payload.data } : list
      );
    },
    [__sendPracCode3.fulfilled]: (state, action) => {
      state.result = state.result.map(list =>
        list.id === 3 ? { ...list, answer: action.payload.data } : list
      );
    },
  },
});
export const { addPracCode, addBackPracCode, addFrontPracCode } =
  TestCodeSlice.actions;
export default TestCodeSlice.reducer;
