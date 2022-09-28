import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users", {
        params: {
          _start: 15,
          _limit: 10,
        },
      })
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => alert(err.massage));
  }, []);

  const handleAdd = () => {
    navigate("/add");
  };

  const handleEdit = (id) => {
    navigate("/edit/" + id);
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/api/users/" + id).then((res) => {
      if (res.status === 200) {
        let newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
      }
    });
  };
  return (
    <div className="container vh-100">
      <h1>Contacts</h1>
      <button
        type="button"
        className="btn text-white position-absolute"
        style={{ backgroundColor: "#009900", right: "15%", top: "50px" }}
        onClick={handleAdd}
      >
        Add contact
      </button>
      <table className="table position-relative mt-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {contacts.map((contact) => (
            <tr key={contact.id} className="align-middle">
              <td className=" ">
                <img
                  src={contact.avatar}
                  alt="avatar"
                  className="rounded-circle bg-secondary me-2"
                />
                {contact.name}
              </td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className="text-center " style={{ minWidth: "170px" }}>
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => handleEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManager;
