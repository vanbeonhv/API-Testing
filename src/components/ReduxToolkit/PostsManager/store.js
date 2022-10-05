import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostsSlice";

const rootReducer = {
  posts: postsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
