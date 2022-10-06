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
      axios
        .post("http://localhost:3001/api/posts", action.payload)
        .then((res) => {
          if (res.status === 201) {
            window.confirm("Add successfully!");
            window.location = "/";
          } else {
            console.log("Status: " + res.status);
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    del: (state, action) => {
      axios
        .delete("http://localhost:3001/api/posts/" + action.payload)
        .then((res) => {
          if (res.status === 200) {
            console.log("Delete successfully!");
          } else {
            console.log("Status: " + res.status);
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    edit: (state, action) => {
      console.log(action.payload);
      axios
        .put(
          "http://localhost:3001/api/posts/" + action.payload.id,
          action.payload
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Edit successfully!");
            window.location = "/";
          } else {
            console.log("Status: " + res.status);
          }
        })
        .catch((err) => {
          throw err;
        });
    },
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
export const { add, del, edit } = actions;
export default reducer;
