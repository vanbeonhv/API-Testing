import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LibraryManager = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
        )
        .then((res) => setBooks(res.data));
    }, 2000);
  }, [books]);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("add");
  };

  const handleEdit = (id) => {
    navigate("edit");
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .get(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
      )
      .then((res) => {
        res.data.splice(id - 1, 1);
        setBooks(res.data);
      })
      .catch((err) => {
        throw err;
      });

    axios
      .post(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books",
        books
      )
      .then(() => console.log("Deleted"))
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="container vh-100">
      <h1 className="">Library</h1>
      <div className="position-relative">
        <button
          type="button"
          className="btn text-white position-absolute"
          style={{ backgroundColor: "#009900", right: "0px", top: "-50px" }}
          onClick={handleAdd}
        >
          Add new Book
        </button>
        <table className="table mt-5 ">
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
                  <button
                    className="btn btn-primary mx-1"
                    onClick={() => handleEdit(book.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryManager;
