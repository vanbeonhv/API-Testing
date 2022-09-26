import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get(`http://localhost:3001/api/users`)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      }, 1000);
    });
  };

  useEffect(() => {
    setLoading(true);
    console.log(loading);
    getUsers()
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        throw err;
      })
      .finally(setLoading(false));
  }, []);

  const handleCreate = () => {
    window.location.href = "/user/add";
  };

  if (loading) {
    console.log("loading...");
    return <p>Loading....</p>;
  } else {
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </div>
        ))}
        <button type="button" onClick={handleCreate}>
          Create
        </button>
      </div>
    );
  }
};

export default Users;
