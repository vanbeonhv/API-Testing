import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./AddContact";
import ContactManager from "./ContactManager";

const ContactGate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactManager />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ContactGate;
