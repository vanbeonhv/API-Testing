import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [contacts, setContacts] = useState({
    title: "",
    quantity: "",
  });
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/students", contacts)
      .then((res) => {
        console.log(res.status);
        alert("Add successfully!");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.data);
          console.log(err.status);
          console.log(err.headers);
        }
      });
    setContacts({
      title: "",
      quantity: "",
    });
  };

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
    console.log(contacts);
  };
  return (
    <div className="container">
      <div
        className="position-absolute start-50 translate-middle"
        style={{ top: "25%" }}
      >
        <h2 className="text-center mb-3">Add Contact</h2>
        <form className="">
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            className="my-2 border border-primary w-100"
            value={contacts.title || ""}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input
            type="number"
            name="quantity"
            className="my-2 border border-primary w-100"
            value={contacts.quantity || ""}
            onChange={handleChange}
          />
          <br />
          <button
            type="submit"
            className="btn text-white mt-2"
            onClick={handleClick}
            style={{ backgroundColor: "#009900" }}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-secondary text-white float-end mt-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
