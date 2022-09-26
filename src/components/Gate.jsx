import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import LibraryManager from "./LibraryManager";

const Gate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryManager />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Gate;
