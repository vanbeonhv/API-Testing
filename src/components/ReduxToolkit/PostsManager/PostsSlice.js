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
      // state.postsList.push(action.payload);
      axios.post("http://localhost:3001/api/posts", action.payload);
    },
    del: (state, action) => {
      axios.delete("http://localhost:3001/api/posts/" + action.payload);
    },
    // edit: (state, action) => {},
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
export const { add, del } = actions;
export default reducer;
