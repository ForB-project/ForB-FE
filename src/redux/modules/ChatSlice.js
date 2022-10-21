import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  chatList: [],
  chatMessage: [],
  roomNum: { room_Id: 1 },
};

export const __chatList = createAsyncThunk(
  "CHATLIST",
  async (payload, thunkAPI) => {
    const { data } = await api.get(`/api/chat/Lists`);
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __chatMessage = createAsyncThunk(
  "CHATLIST",
  async (payload, thunkAPI) => {
    const { data } = await api.get(`/api/chat/${payload}`);
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
      state.roomNum = { ...state.roomNum, room_Id: action.payload };
    },
    addRoom: (state, action) => {
      //     state.roomNum = state.result.map((list) =>
      //      list.id === action.payload.id ? { ...list,pracCode: action.payload.codePrac , answer: action.payload.codePrac } : list
      state.chatList =  action.payload ;
    },
  },
  extraReducers: {
    [__chatList.fulfilled]: (state, action) => {
      state.chatList = action.payload.data;
      if (state.roomNum.roomId!==1) {
        state.roomNum = {
          ...state.roomNum,
          room_Id: action.payload.data[0].roomId,
        };
      }
    },
    [__chatMessage.fulfilled]: (state, action) => {
      state.chatMessage = action.payload.data;
    },
  },
});
export const  {moveRoom,addRoom}  = ChatSlice.actions;
export default ChatSlice.reducer;
