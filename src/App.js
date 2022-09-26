import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import axios from "axios";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/add" element={<UserDetails />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
