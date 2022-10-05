import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./PostsSlice";

const PostsAdd = () => {
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    const action = add(newPost);
    console.log(action);

    dispatch(action);
  };
  return (
    <div className="container">
      <h2>New Post</h2>
      <div>
        <h4>Title</h4>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
        />
        <h4>Content</h4>
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleChange}
        />
      </div>
      <button className="mt-3 btn btn-success" onClick={handleAdd}>
        Add
      </button>
      <button className="mt-3 btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default PostsAdd;
