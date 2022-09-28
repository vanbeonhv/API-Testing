import React, { useEffect, useState } from "react";
import axios from "axios";

const ToDoList = () => {
  const [lists, setLists] = useState([]);
  const [list, setList] = useState({
    userId: 10,
    id: 201,
    title: "",
    completed: true,
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _start: 190,
          _limit: 10,
        },
      })
      .then((res) => {
        console.log(res.status);
        setLists(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      });
  }, []);

  const handleChange = (e) => {
    setList({ [e.target.name]: e.target.value });
    console.log(list.title);
  };

  const handleClick = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", list)
      .then((res) => {
        console.log(res.status);
        alert(`add successfully!`);
      });
  };

  return (
    <div className="position-relative mt-5 vh-100">
      <div
        className="position-absolute start-50 translate-middle"
        style={{ top: "50%" }}
      >
        <h1 className="py-4">Todo List</h1>
        <input
          type="text"
          name="title"
          className="rounded-3 border border-primary"
          value={list.title || ""}
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className="btn btn-primary mt-3 "
          onClick={handleClick}
        >
          Submit
        </button>
        <ul className="mt-4">
          {lists.map((list) => (
            <li key={list.id} className="display-block">
              {list.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
