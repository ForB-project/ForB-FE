import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  chatList: [
    { userName: "아무개", roomId: 1, token: "accessToken" },
    { userName: "이무진", roomId: 2, token: "accessToken" },
    { userName: "아이유", roomId: 3, token: "accessToken" },
    { userName: "카리나", roomId: 4, token: "accessToken" },
  ],
  roomNum:{roomid:1} 
};

export const __chatList = createAsyncThunk(
  "CHATLIST",
  async (payload, thunkAPI) => {
    const { data } = await api.get(`/api/roadmap/chatLists`);
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __chatListDelete = createAsyncThunk(
  "DELETECHAT",
    async (payload, thunkAPI) => {
      console.log(payload);
    const { data } =  await api.delete(`/api/chat/${payload}`);
    return thunkAPI.fulfillWithValue(data);
  }
);

// export const __getResult = createAsyncThunk(
//   "GETRESULT",
//   async (payload, thunkAPI) => {
//     console.log(payload);
//     const { data } = await axios.get(`http://3.38.209.226/api/test/result`);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    moveRoom: (state, action) => {
    //     state.roomNum = state.result.map((list) =>
    //      list.id === action.payload.id ? { ...list,pracCode: action.payload.codePrac , answer: action.payload.codePrac } : list
    //    );
    state.roomNum = {...state.roomNum,roomid:action.payload}
      },
  },
  extraReducers: {
    [__chatList.fulfilled]: (state, action) => { 
      state.chatList = action.payload.data;
      state.roomNum = action.payload.data[0].roomId;
    },
  },
});
export const  {moveRoom}  = ChatSlice.actions;
export default ChatSlice.reducer;
