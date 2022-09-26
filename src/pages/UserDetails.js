import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { userId } = useParams();
  const isCreate = !userId;
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3001/api/users/${userId}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.warn(err));
    }
  }, [userId]);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    console.log(isCreate);
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/users`, user)
      .then((res) =>
        alert(
          `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
            res.data
          )} successfully!!!`
        )
      )
      .catch((err) => console.warn(err));
  };
  return (
    <form className="pt-5 container">
      <h1>User details</h1>
      <div>
        <div>
          <p className="d-inline-block pe-2">Id</p>
          <input
            type="number"
            name="id"
            value={user.id || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="d-inline-block pe-2">Name</p>
          <input
            type="text"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="d-inline-block pe-2">Birthday</p>
          <input
            type="date"
            name="birthday"
            value={user.birthday || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserDetails;
