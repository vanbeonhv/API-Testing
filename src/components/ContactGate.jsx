import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./AddContact";
import ContactManager from "./ContactManager";
import EditContact from "./EditContact";

const ContactGate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactManager />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:contactId" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ContactGate;
