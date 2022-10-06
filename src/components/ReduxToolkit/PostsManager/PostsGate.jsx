import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsAdd from "./PostsAdd";
import PostsApp from "./PostsApp";
import PostsEdit from "./PostsEdit";
import store from "./store";

const PostsGate = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsApp />} />
          <Route path="/add" element={<PostsAdd />} />
          <Route path="/edit/:id" element={<PostsEdit />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default PostsGate;
