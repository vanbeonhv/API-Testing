import React, { useState, useEffect } from "react";
import axios from "axios";

const Article = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = axios.get("http://localhost:3001/api/users");
    const getArticle = axios.get("http://localhost:3001/api/articles");
    axios.all([getUsers, getArticle]).then(
      axios.spread((res1, res2) => {
        const users = res1.data.map((user) => {
          return {
            ...user,
            article: res2.data.filter((item) => item.user_id === user.id),
          };
        });
        setUsers(users);
        console.log(users);
      })
    );
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap container w-50 mt-3">
      <h1>Users</h1>
      <br />
      <table className="table table-striped table-hover text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Article Numbers</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.article.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Article;
