import React, { useEffect } from "react";
import Row from "./components/Row";
import "../src/sass/app.scss";
import requests from "../src/request";
import Banner from "../src/components/Banner";
import circularProgress from "@mui/material/";
import Home from "./components/Home";
import LoadingIndicator from "./components/LoadingIndicator";
import SignUp from "./components/SignUp";
import Nav from "../src/components/Nav";
import { authMe } from "./firebase";
import { useStateValue } from "../src/StateProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home requests={requests} />} />
          <Route path="/login" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <LoadingIndicator />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Home requests={requests} /> */}
    </div>
  );
}

export default App;
