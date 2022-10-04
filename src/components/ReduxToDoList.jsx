import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
import { v4 as uuid } from "uuid";

const ReduxToDoList = () => {
  const [form, setForm] = useState("");
  const todos = useSelector((state) => state.initTodos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(
      addTodo({
        id: uuid(),
        text: form,
      })
    );
  };
  console.log(todos);
  return (
    <div className="container pt-3">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        name="todo"
        value={form || ""}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((task) => (
            <tr key={task.id}>
              <td>{task.text}</td>
              <td>
                <button className="btn btn-danger">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReduxToDoList;
