import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Emps from "./Emps.jsx";
import React from "react";
import Header from "./Header.jsx";
import AddEmployee from "./AddEmployee.jsx";
import EditEmployee from "./EditEmployee.jsx";

export default function Home() {
  return (
    <BrowserRouter>
      <Header>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/edit" element={<EditEmployee />} />
          </Routes>
      </Header>
    </BrowserRouter>
  );
}
