import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsApp from "./PostsApp";
import store from "./store";

const PostsGate = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsApp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default PostsGate;
