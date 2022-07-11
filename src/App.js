import React, { useEffect } from "react";
import Row from "./components/Row";
import "../src/sass/app.scss";
import requests from "../src/request";
import circularProgress from "@mui/material/";
import Home from "./components/Home";
import LoadingIndicator from "./components/LoadingIndicator";
import { authMe } from "./firebase";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Account from "./components/Account";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authMe.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
        // logged out
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {user ? (
          <Register />
        ) : (
          <>
            <Routes>
              <Route path="/account" element={<Account user={user} />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home requests={requests} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
