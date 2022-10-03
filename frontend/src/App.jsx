import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="container bg-black">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
