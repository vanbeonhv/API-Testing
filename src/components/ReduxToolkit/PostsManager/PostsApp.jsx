import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./PostsSlice";

const PostsApp = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsList);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);
  return (
    <div className="container pt-5 ">
      <div className="position-relative mt-5">
        <h2 className="position-absolute m-0" style={{ top: "-60px" }}>
          Posts
        </h2>
        <button
          className="btn btn-success position-absolute end-0"
          style={{ top: "-60px" }}
        >
          Add new Post
        </button>
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className="border rounded d-flex justify-content-center align-items-center pe-3 my-3"
            >
              <div className="m-3">
                <h3>{post.title}</h3>
                <p className="mb-0">{post.body}</p>
              </div>
              <button className="btn btn-primary px-4">Edit</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsApp;
