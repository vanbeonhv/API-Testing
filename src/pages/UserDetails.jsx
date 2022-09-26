import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { userId } = useParams();
  const isCreate = !userId;
  const navigate = useNavigate();
  const [users, setUsers] = useState({});

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3001/api/users/${userId}`)
        .then((res) => setUsers(res.data))
        .catch((err) => {
          throw err;
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(userId);
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users", users)
      .then((res) => {
        alert(
          `${isCreate ? "Add" : "Edit"} ${JSON.stringify(
            res.data
          )} successfully!`
        );
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div className="container pt-5">
      <h1>User details</h1>
      <form>
        <div>
          <p className="d-inline-block pe-2">Id</p>
          <input
            type="number"
            name="id"
            value={users.id || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="d-inline-block pe-2">Name</p>
          <input
            type="text"
            name="name"
            value={users.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="d-inline-block pe-2">Birthday</p>
          <input
            type="date"
            name="birthday"
            value={users.birthday || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
