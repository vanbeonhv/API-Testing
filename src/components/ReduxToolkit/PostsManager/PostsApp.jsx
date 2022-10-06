import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { del, getPosts } from "./PostsSlice";

const PostsApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.postsList);
  console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleAdd = () => {
    navigate("/add");
  };

  const handleDelete = (id) => {
    const action = del(id);
    dispatch(action);
  };

  const handleEdit = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <div className="container pt-5 ">
      <div className="position-relative mt-5">
        <h2 className="position-absolute m-0" style={{ top: "-60px" }}>
          Posts
        </h2>
        <button
          className="btn btn-success position-absolute end-0"
          style={{ top: "-60px" }}
          onClick={handleAdd}
        >
          Add new Post
        </button>
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className="border rounded d-flex justify-content-between align-items-center pe-3 my-3"
            >
              <div className="m-3">
                <h3>{post.title}</h3>
                <p className="mb-0">{post.body}</p>
              </div>
              <div>
                <button
                  className="btn btn-primary px-4"
                  onClick={() => handleEdit(post.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger px-4"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsApp;
