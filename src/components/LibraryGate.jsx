import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import LibraryManager from "./LibraryManager";

const LibraryGate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryManager />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LibraryGate;
