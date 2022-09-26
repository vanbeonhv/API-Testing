import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    window.location.href = "/user/add";
  };

  const getUsers = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    return await axios.get("http://localhost:3001/api/users");
  };

  // const getUsers = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       axios
  //         .get("http://localhost:3001/api/users")
  //         .then((res) => resolve(res))
  //         .catch((err) => reject(err));
  //     }, 1000);
  //   });
  // };

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="container pt-5 fs-1">Loading.....</p>;
  } else {
    return (
      <div className="container pt-5">
        <h1>Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </div>
        ))}
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    );
  }
};

export default Users;
