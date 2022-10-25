import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  chatList: [],
  chatMessage: [],
  roomNum: { room_Id: 0 },
};

export const __chatList = createAsyncThunk(
  "CHATLIST",
  async (payload, thunkAPI) => {
    const { data } = await api.get(`/api/chat/list`);

    return thunkAPI.fulfillWithValue(data);
  }
);

export const __chatMessage = createAsyncThunk(
  "CHATMESSAGE",
  async (payload, thunkAPI) => {
    const { data } = await api.get(`/api/chat/${payload}`);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __chatListDelete = createAsyncThunk(
  "DELETECHAT",
  async (payload, thunkAPI) => {
    const { data } = await api.delete(`/api/chat/${payload.room_Id}`);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    moveRoom: (state, action) => {
      state.roomNum = { ...state.roomNum, room_Id: action.payload };
    },
    addRoom: (state, action) => {
      state.chatList = action.payload;
    },
  },
  extraReducers: {
    [__chatList.fulfilled]: (state, action) => {
      state.chatList = action.payload.data;
    },
    [__chatMessage.fulfilled]: (state, action) => {
      state.chatMessage = action.payload.data;
    },
  },
});
export const { moveRoom, addRoom } = ChatSlice.actions;
export default ChatSlice.reducer;
