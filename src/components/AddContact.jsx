import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [contacts, setContacts] = useState({
    title: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    return () => {
      selectedFile && URL.revokeObjectURL(selectedFile.preview);
    };
  }, [selectedFile]);

  const handleFileUpload = (e) => {
    // setSelectedFile(e.target.files[0]);
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setSelectedFile(file);
    console.log(URL.createObjectURL(file));
    console.log(URL.createObjectURL(selectedFile));
    // const fd = new FormData();
    // // Tạo data để gửi lên server
    // fd.append("file", selectedFile);
    // axios
    //   .post("https://v2.convertapi.com/upload/", fd)
    //   .then((res) => {
    //     console.log(res.status);
    //     console.log(res.data.Url);
    //     setContacts({ ...contacts, avatar: res.data.Url });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users", contacts)
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
      phone: "",
    });
  };

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
    console.log(contacts);
  };
  return (
    <div className="container vh-100 position-relative">
      <div
        className="position-absolute start-50 translate-middle w-25"
        style={{ top: "50%" }}
      >
        <h2 className="text-center mb-3">Add Contact</h2>
        <div className="position-relative align-middle">
          <div
            className="rounded-circle bg-secondary overflow-hidden"
            style={{ height: "70px", width: "70px" }}
          >
            {selectedFile && (
              <img
                src={selectedFile.preview}
                className=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            )}
          </div>
          <div>
            <input
              // ref="fileInput"
              onChange={handleFileUpload}
              type="file"
              style={{ display: "none" }}
              multiple={false}
              id="my-file"
            />
            <button
              className="btn btn-primary position-absolute top-50 end-0 translate-middle-y"
              type="button"
              onClick={() => document.getElementById("my-file").click()}
            >
              Change image
            </button>
          </div>
        </div>
        <form className="">
          <label htmlFor="name">Name</label>
          <br />
          <input
            autoFocus
            type="text"
            name="name"
            className="my-2 border border-primary w-100"
            value={contacts.name || ""}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="my-2 border border-primary w-100"
            value={contacts.email || ""}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="number"
            name="phone"
            className="my-2 border border-primary w-100"
            value={contacts.phone || ""}
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
