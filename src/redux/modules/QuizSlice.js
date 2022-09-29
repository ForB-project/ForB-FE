import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "../../shared/api";
import { forestMoon,fancyOwl,broom1,broom2,scroll,dragonImagine,dragonCastle2,fancyMagic2 } from "../../static/index";

const initialState = {
  quiz: [
    {
      id: 1,
      quizTitle:
        "마법학교에 입학하면서 부엉이를 선물 받게 되었다. \n              받고 싶은 부엉이는?",
      answerFront: "화려하고 풍성한 깃털을 가진 멋진 부엉이",
      answerBack: "강인한 깃으로 빠르게 날아다닐 수 있는 부엉이",
      forbCount: 0,
      image: fancyOwl,
    },
    {
      id: 2,
      quizTitle:
        "기대하던 마법 빗자루가 택배로 도착했다.\n   하지만 약간의 조립이 필요한 상태.",
      answerFront: "신난다! 이 부품이 예뻐보이는데 일단 붙여보자",
      answerBack: "설명서가 어디있지? 차분하게 조립해보자.",
      forbCount: 0,
      image: broom2,
    },
    {
      id: 3,
      quizTitle:
        "     날아다니는 빗자루를 타고 나갈 일이 생겼다.\n아뿔싸! 빗자루 정비를 하지 않아 매우 더러운 상태다",
      answerFront: "빗자루를 정돈하고 깔끔한 상태를 만들어 출발한다.",
      answerBack: "무슨상관이야 잘 날기만 하면 돼.",
      forbCount: 0,
      image: broom1,
    },
    {
      id: 4,
      quizTitle: "여행중에 길을 잃은 당신",
      answerFront: "뭐 어때 경치를 즐기며 도시락을 먹자.",
      answerBack: "마법지도를 펼쳐서 내 위치를 빠르게 확인하자.",
      forbCount: 0,
      image: forestMoon,
    },
    {
      id: 5,
      quizTitle:
        "새로운 마법 한 가지를 배울 수 있는 스크롤이 생겼다.\n              어떤 마법이 들어있을까?",
      answerFront: "사람을 현혹시키는 마법이 들어있다.",
      answerBack: "조용하지만 확실하게 동작하는 살상 마법이다.",
      forbCount: 0,
      image: scroll,
    },
    {
      id: 6,
      quizTitle:
        "                 곧 다가온 마법시험..\n멍하니 허공을 응시하는 당신. 어떤생각을 하고 있을까?",
      answerFront: "용 1000마리를 혼자서 물리치는 상상.\n front",
      answerBack: "마법시험을 잘 통과해서 진급하는 상상.\n front",
      forbCount: 0,
      image: dragonImagine,
    },
    {
      id: 7,
      quizTitle: "용이 학교에 쳐들어 왔다! 당장 용을 물리쳐야하는데, ",
      answerFront: "성능이 다소 의심스럽지만 멋진 보석이 박힌 지팡이.\n front",
      answerBack: "투박하지만 날이 잘 서있는 도끼.\n front",
      forbCount: 0,
      image: dragonCastle2,
    },
    {
      id: 8,
      quizTitle: "화려한 마법을 쓰자 사람들의 이목이 집중되었다.",
      answerFront: "이 상황을 즐긴다.\n front",
      answerBack: "관심은 좋지만 숨고싶어진다.\n front",
      forbCount: 0,
      image: fancyMagic2,
    },
    {
      id: 9,
      quizTitle: "Back1",
      answerFront: "슬리데린",
      answerBack: "레번클로",
      forbCount: 0,
      image: fancyOwl,
    },
    {
      id: 10,
      quizTitle: "Back2",
      answerFront: "슬리데린",
      answerBack: "레번클로",
      forbCount: 0,
      image: fancyOwl,
    },
    {
      id: 11,
      quizTitle: "Back3",
      answerFront: "슬리데린",
      answerBack: "레번클로",
      forbCount: 0,
      image: fancyOwl,
    },
  ],
  result: [],
};

export const __quizResult = createAsyncThunk(
  "QUIZRESULT",
  async (payload, thunkAPI) => {
    const result = { type: payload[0], answer: payload[1] };
    console.log(result);
    const { data } = await api.post(
      `/api/test/result`,
      result
    );
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __getResult = createAsyncThunk(
  "GETRESULT",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { data } = await axios.get(`http://3.38.209.226/api/test/result`);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: {
    [__getResult.fulfilled]: (state, action) => {
      state.result = action.payload;
    },
  },
});
export const { getQuizList } = QuizSlice.actions;
export default QuizSlice.reducer;
