import axios from "axios";
import { useState } from "react";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (dispatch, getState) => {
    return await axios
      .get("http://localhost:3001/api/posts")
      .then((res) => res.data);
  }
);

const postsSlice = createSlice({
  name: "post",
  initialState: {
    postsList: [],
    status: null,
  },
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    // edit: (state, action) => {},
    // delete: (state, action) => {
    //   state;
    // },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.postsList = action.payload;
      // return state;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const { actions, reducer } = postsSlice;
export const { add } = actions;
export default reducer;
