import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { add, edit } from "./PostsSlice";

const PostsEdit = () => {
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postId = useParams();
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/posts/" + postId.id)
      .then((res) => setNewPost(res.data));
  }, []);

  const handleEdit = () => {
    const action = edit(newPost);
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
          size={50}
          name="title"
          value={newPost.title}
          onChange={handleChange}
        />
        <h4>Content</h4>
        <textarea
          type="text"
          rows="5"
          cols="50"
          name="body"
          value={newPost.body}
          onChange={handleChange}
        />
      </div>
      <button className="mt-3 btn btn-success me-3" onClick={handleEdit}>
        Edit
      </button>
      <button className="mt-3 btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default PostsEdit;
