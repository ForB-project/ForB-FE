import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  chatList: [],
  roomNum: { room_Id: 1 },
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
    const { data } =  await api.delete(`/api/chat/${payload.room_Id}`);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    moveRoom: (state, action) => {
    //     state.roomNum = state.result.map((list) =>
    //      list.id === action.payload.id ? { ...list,pracCode: action.payload.codePrac , answer: action.payload.codePrac } : list
    state.roomNum = {...state.roomNum,room_Id:action.payload}
      },
  },
  extraReducers: {
    [__chatList.fulfilled]: (state, action) => { 
      state.chatList = action.payload.data;
      state.roomNum = {...state.roomNum,room_Id:action.payload.data[0].roomId};
    },
  },
});
export const  {moveRoom}  = ChatSlice.actions;
export default ChatSlice.reducer;
