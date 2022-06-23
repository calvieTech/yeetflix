import Row from "./components/Row";
import "../src/sass/app.scss";
import requests from "../src/request";
import Banner from "../src/components/Banner";
import circularProgress from "@mui/material/";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="app">
      <SignUp />
      {/* <LoadingIndicator />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Home requests={requests} /> */}
    </div>
  );
}

export default App;
