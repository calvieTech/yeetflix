import React, { useEffect } from "react";
import Row from "./components/Row";
import "../src/sass/app.scss";
import requests from "../src/request";
import Banner from "../src/components/Banner";
import circularProgress from "@mui/material/";
import Home from "./components/Home";
import LoadingIndicator from "./components/LoadingIndicator";
import SignUp from "./components/Register";
import Nav from "../src/components/Nav";
import { authMe } from "./firebase";
import { useStateValue } from "../src/StateProvider";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  const user = {
    name: "calvin",
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home requests={requests} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} default />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
