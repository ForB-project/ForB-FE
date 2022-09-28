import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  last: false,
  totalPage: 0,
};

// 테스트 결과 가져오기
// export const _getResult = createAsyncThunk(
//   "get/_getResult",
//   async (payload, thunkAPI) => {
//     console.log("payload =", payload);
//     const data = await axios.get(`http://3.38.209.226/api/test/result`);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );

export const _getResult = createAsyncThunk(
  "get/_getResult",
  async (payload, thunkAPI) => {
    try {
      console.log("payload =", payload);
      const data = await axios.get(`http://3.38.209.226/api/test/result`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ResultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: {
    [_getResult.pending]: (state, action) => {
      state.isLoading = true;
    },
    [_getResult.fulfilled]: (state, action) => {
      state.result = action.payload;
      console.log("fulfilled");
    },
    [_getResult.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getResult } = ResultSlice.actions;
export default ResultSlice.reducer;
