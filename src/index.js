import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Article from "./pages/Article";
import ToDoList from "./components/ToDoList";
import LibraryGate from "./components/LibraryGate";
import ContactGate from "./components/ContactGate";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />);
