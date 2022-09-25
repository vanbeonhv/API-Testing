import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LibraryManager = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
      )
      .then((res) => setBooks(res.data));
  }, [books]);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("add");
  };
  return (
    <div className="container vh-100">
      <h1>Library</h1>
      <table className="table position-relative mt-5">
        <button
          type="button"
          className="btn text-white position-absolute"
          style={{ backgroundColor: "#009900", right: "0px", top: "-50px" }}
          onClick={handleAdd}
        >
          Add new Book
        </button>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td className="text-center">
                <button className="btn btn-primary mx-1">Edit</button>
                <button className="btn btn-danger mx-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryManager;
