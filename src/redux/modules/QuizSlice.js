import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

import {
  forestMoon,
  fancyOwl,
  broom1,
  broom2,
  scroll,
  dragonCastle2,
  Brige,
  Team,
} from "../../static/index";

const initialState = {
  quiz: [
    {
      id: 1,
      quizTitle:
        "마법학교에 입학하면서 부엉이를 선물 받게 되었다. \n받고 싶은 부엉이는?",
      answerFront: "화려하고 풍성한 \n깃털을 가진 \n멋진 부엉이",
      answerBack: "강인한 깃으로 \n빠르게 \n날아다닐 수 있는 \n부엉이",
      forbCount: 0,
      image: fancyOwl,
    },
    {
      quizTitle:
        "기대하던 마법 빗자루가 택배로 도착했다.\n하지만 약간의 조립이 필요한 상태.",
      answerFront: "신난다! \n설명서는 보지 않고 \n느낌대로 붙여보자.",
      answerBack: "설명서가 어디있지? \n차분하게 \n조립해보자.",
      forbCount: 0,
      image: broom2,
    },
    {
      id: 3,
      quizTitle:
        "     날아다니는 빗자루를 타고 나갈 일이 생겼다.\n아뿔싸! 빗자루 정비를 하지 않아 매우 더러운 상태다",
      answerFront: "빗자루를 정돈하고, \n깔끔하게 만들어 \n출발한다.",
      answerBack: "무슨 상관이야 \n잘 날기만 하면 돼.",
      forbCount: 0,
      image: broom1,
    },
    {
      id: 4,
      quizTitle: "여행중에 길을 잃은 당신",
      answerFront: "뭐 어때 \n경치를 즐기며 \n도시락을 먹자.",
      answerBack: "마법지도를 펼쳐서 \n내 위치를 \n빠르게 확인하자.",
      forbCount: 0,
      image: forestMoon,
    },
    {
      id: 5,
      quizTitle:
        "새로운 마법 한 가지를 배울 수 있는 스크롤이 생겼다.\n어떤 마법이 들어있을까?",
      answerFront: "화려하지만 \n잊혀진 \n오래된 마법이 \n들어있다.",
      answerBack: "화려하지 \n않지만 \n굉장히 자주 \n사용 되는 \n마법이다.",
      forbCount: 0,
      image: scroll,
    },
    {
      id: 6,
      quizTitle: "용이 학교에 쳐들어 왔다! 당장 용을 물리쳐야 하는데, ",
      answerFront: "최전방에서 \n학생들을 이끌며 \n용에게 맞선다.",
      answerBack: "최전방에서 \n싸우기보다는 \n뒤에서 \n보조에 힘을 다한다.",
      forbCount: 0,
      image: dragonCastle2,
    },
    {
      id: 7,
      quizTitle:
        "마법 팀 대항전이 곧 열린다. \n조를 구해야 참가할 수 있는데 이때 당신은? ",
      answerFront: "원하는 학생 \n혹은 \n믿을 수 있는 \n학생을 찾아 나선다.",
      answerBack: "원했던 조가 아니라도 협동을 위해 발 벗고 나선다.",
      forbCount: 0,
      image: Team,
    },
    {
      id: 8,
      quizTitle: "팀 대항전 중에 끊어진 다리를 건너야 한다. 이때 당신은?",
      answerFront:
        "자신이 \n먼저 넘어가서 \n팀원들이 \n넘어 올 수 있게 \n도와준다.",
      answerBack: "의견을 \n내기보다는 \n보조 하는데 \n힘을 다한다.",
      forbCount: 0,
      image: Brige,
    },
    {
      id: 9,
      quizTitle: "용이 학교에 쳐들어 왔다! 당장 용을 물리쳐야 하는데,",
      answerFront: "꼭 물리쳐야 하나..? \n유인해서 \n피해를 최소화 하자!  ",
      answerBack: "죽이지 않고, \n내 것으로 \n만들어야겠다.",
      forbCount: 0,
      image: dragonCastle2,
    },
    {
      id: 10,
      quizTitle:
        "마법 팀 대항전이 곧 열린다. \n조를 구해야 참가할 수 있는데 이때 당신은? ",
      answerFront: "친분과 관계 없이 \n실력이 가장 좋은 사람들과 함께 한다.",
      answerBack: "자신과 \n친분이 있거나 \n믿을 수 있는 \n사람과 함께 한다.",
      forbCount: 0,
      image: Team,
    },
    {
      id: 11,
      quizTitle: "팀 대항전 중에 끊어진 다리를 건너야 한다. 이때 당신은?",
      answerFront: "다리를 \n건너지 않고 \n다른 방법을 \n찾아본다.",
      answerBack: "누군가 \n희생하게 돼도 \n상관하지 않고 \n다리를 건너는 것이\n 최우선이다.",
      forbCount: 0,
      image: Brige,
    },
  ],
  testResult:[]
};

export const __quizResult = createAsyncThunk(
  "QUIZRESULT",
  async (payload, thunkAPI) => {
    const result = { type: payload[0], answerSum: payload[1] };
    console.log(result,'result in QuizSlice');
    const { data } = await api.post(`/api/test/result`, result);
    console.log(data.data,'data in QuizSlice');
    return thunkAPI.fulfillWithValue(data);
  }
);

export const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: {[__quizResult.fulfilled]: (state, action) => {
    console.log(action.payload.data);
    state.testResult = action.payload.data;
  },},
});
export const { getQuizList } = QuizSlice.actions;
export default QuizSlice.reducer;
